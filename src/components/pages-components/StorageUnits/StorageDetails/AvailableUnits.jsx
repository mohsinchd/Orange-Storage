import React from "react";
import FilterAndSort from "./FilterAndSort";
import IndoorStorageHeading from "./IndoorStorageHeading";
import IndoorStorageList from "./IndoorStorageList";

const AvailableUnits = ({ product, storageFacility }) => {
  console.log(product);
  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <h5>
          Available Units{" "}
          <span className="h6 text-muted">(All Sizes are Approximate)</span>
        </h5>
      </li>
      <li className="list-group-item">
        <FilterAndSort />
      </li>
      {storageFacility.storage_types.length === 0 ? (
        <>
          <div className="alert alert-danger" role="alert">
            This Storage Facility has no available Units.
          </div>
        </>
      ) : (
        <>
          {storageFacility.storage_types.map((storageType) => (
            <>
              <li className="list-group-item  bg-light p-2">
                <IndoorStorageHeading
                  product={product}
                  storageType={storageType}
                />
              </li>
              {storageType.storage_type.map((room) => (
                <IndoorStorageList room={room} />
              ))}
            </>
          ))}
        </>
      )}
    </ul>
  );
};

export default AvailableUnits;
