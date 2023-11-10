import React, { useState } from "react";
import { useNavigate, createSearchParams, Link } from "react-router-dom";

import { BsCalendar3 } from "react-icons/bs";
import { MdBedroomParent } from "react-icons/md";
import { MdLocationCity } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import BusinessUnitCheckbox from "../BusinessUnitStorage/BusinessUnitCheckbox";
import UnitStorageCheckbox from "../UnitStorageForm/UnitStorageCheckbox";
import GeoApiAuto from "../../../GeoApiAuto/GeoApiAuto";
import { toast } from "react-toastify";

const ValueAddedServices = () => {
  const [formData, setFormData] = useState({
    fromDate: "",
    toDate: "",
    fromLocation: "Florida",
    toLocation: "Texas",
    rooms: "",
    size: "",
    serviceType: "",
  });

  const navigate = useNavigate();

  // Dummy State Array
  const dummyStatesArray = [
    "Florida",
    "Texas",
    "California",
    "North Carolina",
    "Colorado",
    "Arizona",
    "Georgia",
    "Washington",
    "New York",
    "South Carolina",
  ];

  // Handlers
  const changeInputHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      formData.rooms === "" ||
      formData.size === "" ||
      formData.serviceType === ""
    ) {
      toast.error("Please fill all the fields first");
      return;
    }
    navigate({
      pathname: "/package/search",
      search: `${createSearchParams(formData)}`,
    });
  };

  return (
    <div className="p-3">
      <form onSubmit={submitHandler}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="location">From Location</label>
              <div className="input-group ">
                <span className="input-group-text">
                  <MdLocationCity size={20} />
                </span>
                <div className="form-control p-0">
                  <GeoApiAuto />
                </div>
              </div>
            </div>
            {/* <Link className="text-dark nav-link">
              Get My <span className="mineTextOrange">Current Location</span>{" "}
            </Link> */}
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="toLocation">To Location</label>
              <div className="input-group ">
                <span className="input-group-text">
                  <MdLocationCity size={20} />
                </span>
                <div className="form-control p-0">
                  <GeoApiAuto />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="fromDate">From</label>
              <div className="input-group ">
                <span className="input-group-text">
                  <BsCalendar3 size={20} />
                </span>
                <input
                  required
                  type="date"
                  name="fromDate"
                  id="fromDate"
                  onChange={changeInputHandler}
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="toDate">To</label>
              <div className="input-group ">
                <span className="input-group-text">
                  <BsCalendar3 size={20} />
                </span>
                <input
                  required
                  type="date"
                  name="toDate"
                  id="toDate"
                  onChange={changeInputHandler}
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="rooms">Rooms</label>
              <div className="input-group ">
                <span className="input-group-text">
                  <MdBedroomParent size={20} />
                </span>
                <select
                  required
                  class="form-select"
                  id="rooms"
                  onChange={changeInputHandler}
                >
                  <option selected>Choose Rooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="size">Avg Room Size</label>
              <div className="input-group ">
                <span className="input-group-text">
                  <MdBedroomParent size={20} />
                </span>
                <select
                  required
                  class="form-select"
                  id="size"
                  onChange={changeInputHandler}
                >
                  <option selected>Choose size</option>
                  <option value="1">10 x 10</option>
                  <option value="2">20 x 20</option>
                  <option value="3">15 x 15</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="size">Select Service Type</label>
              <div className="input-group ">
                <span className="input-group-text">
                  <FaBusinessTime size={20} />
                </span>
                <select
                  required
                  class="form-select"
                  id="serviceType"
                  onChange={changeInputHandler}
                >
                  <option value="Business">Business</option>
                  <option value="Personal">Personal</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            {formData.serviceType === "Business" ? (
              <BusinessUnitCheckbox />
            ) : (
              <UnitStorageCheckbox />
            )}
          </div>
        </div>

        <div className="form-group mt-3 w-100">
          <button type="submit" className="btn btn-dark w-100">
            Find a Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default ValueAddedServices;
