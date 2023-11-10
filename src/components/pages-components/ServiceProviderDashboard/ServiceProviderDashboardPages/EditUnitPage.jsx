import React, { useState, useEffect } from "react";
import { FaWarehouse } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import EditUnitForm from "../ServiceProviderDashboardComponents/EditUnitPageComponents/EditUnitForm";
import AddUnitMap from "../ServiceProviderDashboardComponents/AddNewUnitPageComponents/AddUnitMap";
import Spinner from "../../../shared-components/Spinner/Spinner";
import { getSingleStorageUnit } from "../../../actions/storageUnitActions";
import { UPDATE_STORAGE_UNIT_CLEAR } from "../../../constants/storageUnitConstants";

const EditUnitPage = () => {
  const { id } = useParams();

  const [mapData, setMapData] = useState({
    properties: {
      lat: 40.7127281,
      lon: -74.0060152,
      formatted: "New York, NY, United States of America",
    },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, storageUnit } = useSelector(
    (state) => state.getSingleStorageUnit
  );

  const {
    loading: loadingUpdate,
    storageUnit: storageUnitUpdate,
    error,
  } = useSelector((state) => state.updateStorageUnit);

  const getLocationForMap = (data) => {
    setMapData(data);
  };

  useEffect(() => {
    dispatch(getSingleStorageUnit(id));

    if (storageUnitUpdate) {
      toast.success("Updated Successfully!");
      navigate(`/service-provider-dashboard/analytics/${storageUnitUpdate.id}`);
      dispatch({ type: UPDATE_STORAGE_UNIT_CLEAR });
    }

    if (error) {
      toast.error("Something went wrong");
      dispatch({ type: UPDATE_STORAGE_UNIT_CLEAR });
    }
  }, [dispatch, storageUnitUpdate, error]);

  return (
    <>
      {loading || loadingUpdate ? (
        <Spinner />
      ) : (
        <div className="mt-3">
          <div className="d-flex align-items-center">
            <div className="p-2 bg-orange text-light rounded me-2">
              <FaWarehouse size={20} />
            </div>
            <h5 className="text-uppercase">Edit Storage Facility</h5>
          </div>
          <div className="card mt-4">
            <div className="card-body">
              <h3 className="text-uppercase">Edit Facility</h3>
              <div className="row gx-4 mt-4">
                <div className="col-md-7">
                  <EditUnitForm
                    storageUnit={storageUnit}
                    onLocationChange={getLocationForMap}
                  />
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

export default EditUnitPage;
