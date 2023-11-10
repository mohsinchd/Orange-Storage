import React, { useState } from "react";
import Select from "react-select";
import GeoApiAuto from "../../../GeoApiAuto/GeoApiAuto";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UnitStorageForm = () => {
  const [formData, setFormData] = useState({
    location: "",
    storage_type: [],
    small_size: 0,
    medium_size: 0,
    large_size: 0,
  });

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

  const unitSizeOptions = [
    { value: "small", label: "Small (Storage Locker, 5x5, 5x10)" },
    { value: "medium", label: "Medium (5x15, 10x10, 10x15)" },
    { value: "large", label: "Large (10x20, 10x25, 10x30)" },
  ];

  const typeOfStorage = [
    { value: "climate_control", label: "Climate Control" },
    { value: "indoor_storage", label: "Indoor Storage" },
    { value: "outdoor", label: "Outdoor/Drive Up" },
  ];

  const selectedSizeHandler = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);

    // Update small_size field based on selection
    const smallSizeSelected = selectedValues.includes("small");
    setFormData((prevState) => ({
      ...prevState,
      small_size: smallSizeSelected ? 1 : 0,
    }));

    // Update medium_size field based on selection
    const mediumSizeSelected = selectedValues.includes("medium");
    setFormData((prevState) => ({
      ...prevState,
      medium_size: mediumSizeSelected ? 1 : 0,
    }));

    // Update large_size field based on selection
    const largeSizeSelected = selectedValues.includes("large");
    setFormData((prevState) => ({
      ...prevState,
      large_size: largeSizeSelected ? 1 : 0,
    }));
  };

  const selectedTypeHandler = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    setFormData((prev) => {
      return {
        ...prev,
        storage_type: selectedValues,
      };
    });
  };

  const navigate = useNavigate();

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!formData.location) {
      return toast.error("Location is Required.");
    }

    sessionStorage.setItem("us_Storage_facility", JSON.stringify(formData));

    navigate({
      pathname: "/storages/results",
      search: `?${createSearchParams(formData)}`,
    });
  };

  return (
    <div className="px-3 pt-3">
      <form>
        <div className="form-group">
          <label htmlFor="location">Your Location</label>
          <div className="form-control p-0">
            <GeoApiAuto id="location" getLocationData={getLocationData} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="size">Unit Size (Optional)</label>
          <Select
            options={unitSizeOptions}
            isMulti
            placeholder="Select Unit Size"
            onChange={selectedSizeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="typeOfUnit">Type Of Storage (Optional)</label>
          <Select
            options={typeOfStorage}
            isMulti
            placeholder="Select type"
            onChange={selectedTypeHandler}
          />
        </div>
        <Link to="/storages/results">
          <button
            onClick={submitFormHandler}
            className="border-0 text-light p-2 rounded bg-orange btn-block w-100  mt-3"
          >
            Find Units
          </button>
        </Link>
      </form>
    </div>
  );
};

export default UnitStorageForm;
