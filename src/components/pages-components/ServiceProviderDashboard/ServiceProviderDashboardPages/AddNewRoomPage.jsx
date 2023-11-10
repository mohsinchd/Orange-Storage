import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaWarehouse } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import AddRoomForm from "../ServiceProviderDashboardComponents/AddNewRoomPageComponents/AddRoomForm";
import Spinner from "../../../shared-components/Spinner/Spinner";
import { CREATE_ROOMS_CLEAR } from "../../../constants/roomsConstants";

const AddNewRoomPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { loading, rooms, error } = useSelector((state) => state.createRooms);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rooms) {
      toast.success("Created successfully!");
      navigate(`/service-provider-dashboard/analytics/${id}`);
      dispatch({ type: CREATE_ROOMS_CLEAR });
    }

    if (error) {
      toast.error("Something went wrong.");
      // dispatch({ type: CREATE_ROOMS_CLEAR });
    }
  }, [rooms, error]);

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
            <h5 className="text-uppercase">Add new Storage Unit</h5>
          </div>
          <div className="mt-4">
            <div className="card">
              <div className="card-body">
                <h3 className="text-uppercase">create New Storage Unit</h3>
                <AddRoomForm id={id} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddNewRoomPage;
