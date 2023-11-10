import React from "react";
import StorageUnitMap from "./StorageUnitMap";
import StorageUnitImage from "./StorageUnitImage";

const StorageUnitImageAndMap = ({ unit }) => {
  return (
    <>
      <div className="col-md-5 mb-2">
        <div className="card h-100 ">
          <div className="card-body">
            <StorageUnitImage unit={unit} />
          </div>
        </div>
      </div>
      <div className="col-md-7 mb-2">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="mb-3">Storage Facility Location</h5>
            <StorageUnitMap unit={unit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default StorageUnitImageAndMap;
