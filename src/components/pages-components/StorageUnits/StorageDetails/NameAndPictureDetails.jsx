import React from "react";
import Rating from "../../../shared-components/RatingStars/RatingStars";
import { FaPhone, FaRegClock, FaLocationArrow } from "react-icons/fa";
import { MdFilterFrames } from "react-icons/md";

import HoursModal from "./HoursModal";
import MapModal from "./MapModal/MapModal";

const NameAndPictureDetails = ({ product, storageFacility }) => {
  return (
    <div className="d-flex justify-content-between border-bottom">
      <div>
        <h1>{storageFacility.name}</h1>
        <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
        <p className="my-3">{storageFacility.location.address}</p>
        <p>
          <span className="me-5  pointer">
            <FaPhone className="mineTextOrange" />{" "}
            {storageFacility.storage_provider.phone_number}
          </span>
          <span
            className="me-5 pointer"
            data-bs-toggle="modal"
            data-bs-target="#hoursModal"
          >
            <FaRegClock className="mineTextOrange" /> Hours
          </span>
          <span
            className="me-5 pointer"
            data-bs-toggle="modal"
            data-bs-target="#mapModal"
          >
            <FaLocationArrow className="mineTextOrange" /> Directions
          </span>
          <span className="pointer">
            <MdFilterFrames className="mineTextOrange" /> Photos
          </span>
        </p>
      </div>

      <div>
        <img
          src={product.image}
          className="img-fluid rounded"
          alt="storagePic"
          style={{
            width: 200,
            height: 200,
          }}
        />
        <p className="fw-bold text-center mt-3">View Photos</p>
      </div>

      <MapModal storageFacility={storageFacility} />
      <HoursModal storageFacility={storageFacility} />
    </div>
  );
};

export default NameAndPictureDetails;
