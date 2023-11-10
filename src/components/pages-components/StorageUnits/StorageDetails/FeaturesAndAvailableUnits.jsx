import React from "react";
import Features from "./Features";
import AvailableUnits from "./AvailableUnits";

const FeaturesAndAvailableUnits = ({ product, storageFacility }) => {
  return (
    <div className="row py-3">
      <div className="col-md-3">
        <Features product={product} storageFacility={storageFacility} />
      </div>
      <div className="col-md-9">
        <AvailableUnits product={product} storageFacility={storageFacility} />
      </div>
    </div>
  );
};

export default FeaturesAndAvailableUnits;
