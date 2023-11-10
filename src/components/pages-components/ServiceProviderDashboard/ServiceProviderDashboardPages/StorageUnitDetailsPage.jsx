import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import StorageUnitImageAndMap from "../ServiceProviderDashboardComponents/StorageProviderDetailsPageComponents/StorageUnitImageAndMap";
import StorageUnitCharts from "../ServiceProviderDashboardComponents/StorageProviderDetailsPageComponents/StorageUnitCharts";
import StorageUnitRooms from "../ServiceProviderDashboardComponents/StorageProviderDetailsPageComponents/StorageUnitRooms";
import Spinner from "../../../shared-components/Spinner/Spinner";

import {
  getSingleStorageUnit,
  getTotalStorageUnits,
} from "../../../actions/storageUnitActions";
import { getAllRoomsOfSpecificUnit } from "../../../actions/roomsActions";

const StorageUnitDetailsPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { loading, storageUnit: unit } = useSelector(
    (state) => state.getSingleStorageUnit
  );

  const { loading: totalLoading, rooms } = useSelector(
    (state) => state.getAllRoomsOfSpecificUnit
  );

  useEffect(() => {
    dispatch(getSingleStorageUnit(id));
    dispatch(getAllRoomsOfSpecificUnit(id));
  }, [dispatch]);

  return (
    <div className="mt-3">
      {loading || totalLoading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="text-uppercase d-inline mb-0">{unit.name}.</h1>
          <p className="lead text-muted">{unit.storage_provider.email}</p>

          <div className="row gx-4 mt-4">
            <StorageUnitImageAndMap unit={unit} />
          </div>
          <div className="row gx-4 mt-4">
            <StorageUnitCharts unit={unit} />
          </div>

          <div className="row mt-4">
            <StorageUnitRooms storageUnits={rooms} unit={unit} />
          </div>
        </>
      )}
    </div>
  );
};

export default StorageUnitDetailsPage;
