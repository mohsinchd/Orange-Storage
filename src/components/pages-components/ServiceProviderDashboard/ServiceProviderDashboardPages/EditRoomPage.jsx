import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleRoom } from "../../../actions/roomsActions";
import { FaWarehouse } from "react-icons/fa";
import Spinner from "../../../shared-components/Spinner/Spinner";
import { toast } from "react-toastify";
import EditUnitForm from "../ServiceProviderDashboardComponents/EditRoomPageComponents/EditUnitForm";
import { UPDATE_ROOMS_CLEAR } from "../../../constants/roomsConstants";

const EditRoomPage = () => {
  const { loading, room } = useSelector((state) => state.getSingleRoom);
  const {
    loading: updatedLoading,
    room: updatedRoom,
    error,
  } = useSelector((state) => state.updateRoom);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { storageId, roomId } = useParams();

  useEffect(() => {
    dispatch(getSingleRoom(roomId));

    if (updatedRoom) {
      toast.success("Updated Successfully!");
      navigate("/service-provider-dashboard/analytics");
      dispatch({ type: UPDATE_ROOMS_CLEAR });
    }

    if (error) {
      toast.error("Something went wrong");
      dispatch({ type: UPDATE_ROOMS_CLEAR });
    }
  }, [dispatch, updatedRoom, error]);

  return (
    <>
      {loading || updatedLoading ? (
        <Spinner />
      ) : (
        <div className="mt-3">
          <div className="d-flex align-items-center">
            <div className="p-2 bg-orange text-light rounded me-2">
              <FaWarehouse size={20} />
            </div>
            <h5 className="text-uppercase">Edit Storage Unit</h5>
          </div>
          <div className="mt-4">
            <div className="card  w-100">
              <div className="card-body">
                <h3 className="text-uppercase text-center">
                  Edit Storage Unit Form
                </h3>
                <EditUnitForm
                  room={room}
                  storageId={storageId}
                  roomId={roomId}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditRoomPage;
