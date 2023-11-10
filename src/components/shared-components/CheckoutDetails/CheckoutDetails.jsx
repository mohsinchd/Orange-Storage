import React, { useState } from "react";

import { createSearchParams, useNavigate } from "react-router-dom";
import CheckoutLocation from "./CheckoutLocation";
import { toast } from "react-toastify";

const CheckoutDetails = ({ id, provider, totalSize }) => {
  let searchParam = { id: id };
  console.log(provider);

  const [formData, setFormData] = useState({
    from_location: "",
    business_type: "public",
    reasons: "",
    from_date: "",
    to_date: "",
    storage_order: provider && provider.id,
    size: Number(totalSize),
    per_unit_price: provider && provider.per_unit_price,
    pending: true,
    proccess: false,
    completed: false,
  });

  const navigate = useNavigate();

  const dataChangeHandler = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.id]: event.target.value,
      };
    });
  };

  const getLocationData = (location, id) => {
    if (!location) {
      return setFormData((prev) => {
        return {
          ...prev,
          [id]: "",
        };
      });
    }

    const locationData = {
      address: location.properties.formatted
        ? location.properties.formatted
        : "",
      city: location.properties.city ? location.properties.city : "",
      country: location.properties.country ? location.properties.country : "",
      country_code: location.properties.country_code
        ? location.properties.country_code
        : "",
      county: location.properties.county ? location.properties.county : "",
      postcode: location.properties.postcode ? location.properties.postcode : 0,
      district: location.properties.district
        ? location.properties.district
        : "",
      lat: location.properties.lat ? location.properties.lat : "",
      lon: location.properties.lon ? location.properties.lon : "",
    };

    setFormData((prev) => {
      return {
        ...prev,
        [id]: locationData,
      };
    });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (
      !formData.from_location ||
      !formData.reasons ||
      !formData.to_date ||
      !formData.from_date
    ) {
      return toast.error("Add all the information before going to checkout");
    }

    sessionStorage.setItem("orderPlacingDetails", JSON.stringify(formData));

    navigate({
      pathname: "/checkout",
      search: `${createSearchParams(searchParam)}`,
    });
  };

  return (
    <>
      <>
        <form onSubmit={submitFormHandler}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="location">
                  From Location (Where to pick up)
                </label>

                <div className="form-control p-0">
                  <CheckoutLocation
                    id="from_location"
                    getLocationData={getLocationData}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="reasons">Reasons</label>
                <select
                  onChange={dataChangeHandler}
                  id="reasons"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select Reasons</option>
                  <option value="Moving Homes">Moving Homes</option>
                  <option value="Natural Disasters">Natural Disasters</option>
                  <option value="Accidental Landlords">
                    Accidental Landlords
                  </option>
                  <option value="Hoardings">Hoardings</option>
                  <option value="Recreational Vehicles">
                    Recreational Vehicles
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="from_date">From Date</label>
                <input
                  type="date"
                  name="from_date"
                  onChange={dataChangeHandler}
                  id="from_date"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="to_date">To Date</label>
                <input
                  type="date"
                  name="to_date"
                  onChange={dataChangeHandler}
                  id="to_date"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <button className="btn btn-primary mt-3">Checkout</button>
        </form>
      </>
    </>
  );
};

export default CheckoutDetails;
