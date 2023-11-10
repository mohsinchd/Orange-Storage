import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllUsStorageFacilities } from "../../../actions/usStorageFacilityActions";

const FilterCards = () => {
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

    let storage_type_filter = formData.storage_type.join(" ");
    formData.storage_type = storage_type_filter;

    dispatch(getAllUsStorageFacilities(formData));
  };

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
    <div className="card box-shadow">
      <div className="card-header">
        <h4>Filter & Sort Locations</h4>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item p-4">
          <h6>Sort Results By:</h6>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Distance
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" for="flexRadioDefault2">
              Price (Lowest to Highest)
            </label>
          </div>
        </li>
        <li className="list-group-item p-4">
          <h6>Unit Size:</h6>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={() =>
                setFormData((prev) => ({
                  ...prev,
                  small_size: prev.small_size === 1 ? 0 : 1,
                }))
              }
              checked={formData.small_size === 1 ? true : false}
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Small (Storage Locker, 5x5, 5x10)
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={() =>
                setFormData((prev) => ({
                  ...prev,
                  medium_size: prev.medium_size === 1 ? 0 : 1,
                }))
              }
              checked={formData.medium_size === 1 ? true : false}
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Medium (5x15, 10x10, 10x15)
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={() =>
                setFormData((prev) => ({
                  ...prev,
                  large_size: prev.large_size === 1 ? 0 : 1,
                }))
              }
              checked={formData.large_size === 1 ? true : false}
              name="flexRadioDefault"
              id="flexRadioDefault3"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Large (10x20, 10x25, 10x30)
            </label>
          </div>
        </li>
        <li className="list-group-item p-4">
          <h6>Features:</h6>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={() => {
                if (!formData.storage_type.includes("climate_control")) {
                  setFormData((prev) => ({
                    ...prev,
                    storage_type: [...prev.storage_type, "climate_control"],
                  }));
                } else {
                  setFormData((prev) => ({
                    ...prev,
                    storage_type: prev.storage_type.filter(
                      (type) => type !== "climate_control"
                    ),
                  }));
                }
              }}
              checked={formData.storage_type.includes("climate_control")}
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Climate Control
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={() => {
                if (!formData.storage_type.includes("indoor_storage")) {
                  setFormData((prev) => ({
                    ...prev,
                    storage_type: [...prev.storage_type, "indoor_storage"],
                  }));
                } else {
                  setFormData((prev) => ({
                    ...prev,
                    storage_type: prev.storage_type.filter(
                      (type) => type !== "indoor_storage"
                    ),
                  }));
                }
              }}
              checked={formData.storage_type.includes("indoor_storage")}
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Indoor Storage
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={() => {
                if (!formData.storage_type.includes("outdoor")) {
                  setFormData((prev) => ({
                    ...prev,
                    storage_type: [...prev.storage_type, "outdoor"],
                  }));
                } else {
                  setFormData((prev) => ({
                    ...prev,
                    storage_type: prev.storage_type.filter(
                      (type) => type !== "outdoor"
                    ),
                  }));
                }
              }}
              checked={formData.storage_type.includes("outdoor")}
              name="flexRadioDefault"
              id="flexRadioDefault3"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Outdoor/Drive Up
            </label>
          </div>
        </li>

        <li className="list-group-item text-end">
          <button
            onClick={submitFormHandler}
            className="border-0 p-2 bg-orange text-light"
          >
            Filter Facilities
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FilterCards;
