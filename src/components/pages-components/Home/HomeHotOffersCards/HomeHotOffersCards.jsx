import React from "react";
import { Link } from "react-router-dom";

import { AiFillSafetyCertificate } from "react-icons/ai";

const HomeHotOffersCards = ({ product }) => {
  const { name, fax_number, email, phone_number } = product.storage_provider;

  return (
    <div class="card mb-5 listingCard" style={{ width: "100%" }}>
      <Link to={`/package/details/${product.id}`}>
        <img
          src="/images/storage6.jpg"
          className="img-fluid rounded card-img-top"
          alt={name}
        />
      </Link>
      <div class="card-body">
        <div className="mb-2">
          <span class="badge listing-card-badge-background-mine">
            <AiFillSafetyCertificate />
            Enhanced Safety
          </span>
        </div>
        <h5 class="card-title">{name}</h5>
        <div className="mb-2">
          <small className="text-secondary">{product.buisness_type}</small>
        </div>
        <div className="mb-2">
          <ul className="text-secondary">
            <li>Phone Number: {phone_number}</li>
            <li>Fax Number: {fax_number}</li>
            <li>Email: {email}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeHotOffersCards;
