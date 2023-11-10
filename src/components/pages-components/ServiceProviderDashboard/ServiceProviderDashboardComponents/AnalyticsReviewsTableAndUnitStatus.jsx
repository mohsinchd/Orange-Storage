import React from "react";

import dummyClients from "../../../../dummyClients";
import UnitStorageStatusTable from "./UnitStorageStatusTable";
import UnitStorageReviewsTable from "./UnitStorageReviewsTable";

const AnalyticsReviewsTableAndUnitStatus = ({ StorageUnitData }) => {
  return (
    <>
      <div className="col-md-6 mb-2">
        <div className="card h-100 ">
          <div className="card-body">
            <h5 className="mb-3">Storage Facility Status</h5>
            <UnitStorageStatusTable data={StorageUnitData} />
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-2">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="mb-3">User Reviews</h5>
            <UnitStorageReviewsTable data={dummyClients} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsReviewsTableAndUnitStatus;
