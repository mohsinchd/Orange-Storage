import React, { useState } from "react";
import MapWithRoute from "./MapWithRoute";
import MyLocation from "./MyLocation";

const MapModal = ({ storageFacility }) => {
  const [formData, setFormData] = useState({
    location: {
      lat: 31.025009,
      lon: 73.847878,
    },
  });

  const getLocationData = (data, id) => {
    if (!data) {
      return setFormData((prev) => {
        return {
          ...prev,
          [id]: {
            lat: 31.025009,
            lon: 73.847878,
          },
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
    setFormData((prev) => {
      return {
        ...prev,
        [id]: {
          lat: locationData.lat,
          lon: locationData.lon,
        },
      };
    });
  };

  return (
    <>
      <div
        className="modal fade"
        id="mapModal"
        tabindex="-1"
        aria-labelledby="mapModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h5>Directions</h5>
              <MapWithRoute
                storageFacility={storageFacility}
                formData={formData}
              />
              <div className="form-group">
                <label htmlFor="location">Your Location</label>
                <div className="form-control p-0">
                  <MyLocation getLocationData={getLocationData} id="location" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="border-0 text-light p-2 px-3 bg-orange"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapModal;
