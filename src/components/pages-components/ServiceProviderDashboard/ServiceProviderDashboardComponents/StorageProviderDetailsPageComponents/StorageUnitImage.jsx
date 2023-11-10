import React from "react";
import { GoLocation } from "react-icons/go";
import { FiFlag } from "react-icons/fi";

const StorageUnitImage = ({ unit }) => {
  return (
    <>
      <img
        src="/images/storage1.jpg"
        alt="storage1"
        className="img-fluid rounded h-75 w-100"
      />
      <h5 className="mt-3">
        {" "}
        <GoLocation /> {unit.location.address}
      </h5>
      <h6 className="text-muted">
        {" "}
        <FiFlag /> {unit.location.country}
      </h6>
    </>
  );
};

export default StorageUnitImage;
