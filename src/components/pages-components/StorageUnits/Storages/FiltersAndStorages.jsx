import React from "react";
import FilterCards from "./FilterCards";
import StorageUnitsList from "./StorageUnitsList";
import StorageUnitsMap from "./StorageUnitsMap";
import { useSelector } from "react-redux";
import Spinner from "../../../shared-components/Spinner/Spinner";

const FiltersAndStorages = ({ view }) => {
  const { loading, error, storageFacilties } = useSelector(
    (state) => state.usStorageFacilities
  );

  return (
    <div className="row my-3">
      <div className="col-md-3">
        <FilterCards />
      </div>
      <div className="col-md-9">
        {loading ? (
          <Spinner />
        ) : error ? (
          <div className="alert alert-danger" role="alert">
            {error.msg}
          </div>
        ) : (
          <>
            {view.list ? (
              <StorageUnitsList storageFacilties={storageFacilties} />
            ) : (
              <StorageUnitsMap storageFacilties={storageFacilties} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FiltersAndStorages;
