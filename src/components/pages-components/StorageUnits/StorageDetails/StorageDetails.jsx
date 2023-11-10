import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../../../products";

import NameAndPictureDetails from "./NameAndPictureDetails";
import FeaturesAndAvailableUnits from "./FeaturesAndAvailableUnits";
import FooterDetails from "./FooterDetails";
import Stepper from "../../../shared-components/Stepper/Stepper";
import Spinner from "../../../shared-components/Spinner/Spinner";

import { useDispatch, useSelector } from "react-redux";
import { getUsStorageFacilityDetails } from "../../../actions/usStorageFacilityActions";

const StorageDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { error, loading, storageFacility } = useSelector(
    (state) => state.usStorageFacilityDetails
  );

  const product = products.find((p) => p._id === id);

  useEffect(() => {
    dispatch(getUsStorageFacilityDetails(id));
  }, []);

  return (
    <div className="container py-3">
      <Stepper step1 step2 step3 id={id} />
      {loading ? (
        <Spinner />
      ) : error ? (
        <div className="alert alert-danger" role="alert">
          {error.detail}
        </div>
      ) : (
        <>
          <NameAndPictureDetails
            product={product}
            storageFacility={storageFacility}
          />
          <FeaturesAndAvailableUnits
            product={product}
            storageFacility={storageFacility}
          />
        </>
      )}
      <FooterDetails />
    </div>
  );
};

export default StorageDetails;
