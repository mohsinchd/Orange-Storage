import React, { useState, useEffect } from "react";
import { FaWarehouse } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AddUnitForm from "../ServiceProviderDashboardComponents/AddNewUnitPageComponents/AddUnitForm";
import AddUnitMap from "../ServiceProviderDashboardComponents/AddNewUnitPageComponents/AddUnitMap";
import Spinner from "../../../shared-components/Spinner/Spinner";
import { CREATE_STORAGE_UNIT_CLEAR } from "../../../constants/storageUnitConstants";

const AddNewUnitPage = () => {
  const [mapData, setMapData] = useState({
    properties: {
      lat: 40.7127281,
      lon: -74.0060152,
      formatted: "New York, NY, United States of America",
    },
  });

  const { loading, storageUnit, error } = useSelector(
    (state) => state.createStorageUnit
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getLocationForMap = (data) => {
    setMapData(data);
  };

  useEffect(() => {
    if (storageUnit) {
      toast.success("Created Successfully!");
      navigate(`/service-provider-dashboard/analytics/${storageUnit.id}`);
      dispatch({ type: CREATE_STORAGE_UNIT_CLEAR });
    }

    if (error) {
      toast.error("Something went wrong");
      dispatch({ type: CREATE_STORAGE_UNIT_CLEAR });
    }
  }, [storageUnit, error, dispatch]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="mt-3">
          <div className="d-flex align-items-center">
            <div className="p-2 bg-orange text-light rounded me-2">
              <FaWarehouse size={20} />
            </div>
            <h5 className="text-uppercase">Add new storage facility</h5>
          </div>
          <div className="card mt-4">
            <div className="card-body">
              <h3 className="text-uppercase">create storage facility</h3>
              <div className="row gx-4 mt-4">
                <div className="col-md-7">
                  <AddUnitForm onLocationChange={getLocationForMap} />
                </div>
                <div className="col-md-5">
                  <AddUnitMap mapData={mapData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddNewUnitPage;
