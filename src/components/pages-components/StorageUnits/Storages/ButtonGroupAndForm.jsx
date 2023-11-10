import React, { useEffect, useState } from "react";
import GeoApiAuto from "../../GeoApiAuto/GeoApiAuto";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { getAllUsStorageFacilities } from "../../../actions/usStorageFacilityActions";

const ButtonGroupAndForm = ({ changeView, onChangeView }) => {
  const [formData, setFormData] = useState({
    location: "",
    storage_type: [],
    small_size: 0,
    medium_size: 0,
    large_size: 0,
  });

  const dispatch = useDispatch();

  // Submit Form Handler

  const submitFormHandler = (event) => {
    event.preventDefault();

    dispatch(getAllUsStorageFacilities(formData));
  };

  const getLocationData = (data, id) => {
    if (!data) {
      return setFormData((prev) => {
        return {
          ...prev,
          [id]: "",
        };
      });
    }

    let locationData = {
      address: data.properties.formatted || "",
      city: data.properties.city || "",
      country: data.properties.country || "",
      country_code: data.properties.country_code || "",
      county: data.properties.county || "",
      postcode: data.properties.postcode || 0,
      district: data.properties.district || null,
      lat: data.properties.lat,
      lon: data.properties.lon,
    };

    console.log(locationData);
    setFormData((prev) => {
      return {
        ...prev,
        [id]: locationData.address,
      };
    });
  };

  // Handle Side Effects
  useEffect(() => {
    let previousState = JSON.parse(
      sessionStorage.getItem("us_Storage_facility")
    );
    setFormData((prev) => ({
      ...prev,
      ...previousState,
    }));
  }, []);

  return (
    <div className="">
      <div className="d-flex justify-content-between align-items-center">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            onClick={() =>
              onChangeView({ list: !changeView.list, map: !changeView.map })
            }
            type="button"
            className={`border-0 p-2 px-5 ${
              changeView.list ? "bg-orange text-light" : "bg-light text-dark"
            }`}
          >
            <AiOutlineUnorderedList /> List
          </button>

          <button
            onClick={() =>
              onChangeView({ list: !changeView.list, map: !changeView.map })
            }
            type="button"
            className={`border-0 p-2 px-5 ${
              changeView.map ? "bg-orange text-light" : "bg-light text-dark"
            }`}
          >
            <FaMapMarkerAlt /> Maps
          </button>
        </div>
        <div>
          <form className="d-flex align-items-center justify-content-between">
            <div className="form-group">
              <label htmlFor="location">Your Location</label>
              <div className="form-control p-0">
                <GeoApiAuto id="location" getLocationData={getLocationData} />
              </div>
            </div>
            <button
              onClick={submitFormHandler}
              type="submit"
              className="border-0 p-2 mt-3 rounded ms-2 bg-orange text-light"
            >
              Find Units
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ButtonGroupAndForm;
