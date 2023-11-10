import React from "react";
import StorageUnitRoomsTable from "./StorageUnitRoomsTable";
import { Link } from "react-router-dom";

const StorageUnitRooms = ({ storageUnits, unit }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5>Storage Units</h5>
        {storageUnits.results.length === 0 ? (
          <h5 className="text-center">No Storage Units Available.</h5>
        ) : (
          <>
            <StorageUnitRoomsTable storageUnits={storageUnits} />
          </>
        )}
        <Link
          to={`/service-provider-dashboard/addRoom/${unit.id}`}
          className="btn btn-dark"
        >
          Create New Unit
        </Link>
      </div>
    </div>
  );
};

export default StorageUnitRooms;
