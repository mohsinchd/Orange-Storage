import React from "react";

import { Link } from "react-router-dom";
import Rating from "../../../shared-components/RatingStars/RatingStars";
import { MdCameraIndoor, MdOutlineCameraOutdoor } from "react-icons/md";
import { BsSpeedometer } from "react-icons/bs";

const StorageUnitsList = ({ storageFacilties }) => {
  return (
    <>
      <ul className="list-group list-group-flush">
        {storageFacilties.results.map((storage) => {
          return (
            <li className="card card-body p-4 mb-3" key={storage._id}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <span className="badge bg-orange p-3">{storage._id}</span>
                  <h5 className="ms-3">{storage.name}</h5>
                </div>
                <div>
                  <h6 className="text-muted">{storage.distance} Miles</h6>
                </div>
              </div>
              <div className="d-flex justify-content-between p-3">
                <div>
                  <Rating
                    value={storage.average_rating ? storage.average_rating : 0}
                    text={` ${
                      storage.total_persons_rating
                        ? storage.total_persons_rating
                        : 0
                    } reviews `}
                    color="#8704f5"
                  />
                  <p className="my-3">{storage.location.address}</p>
                </div>
                <div className="d-none d-md-block">
                  <h6>Office Hours:</h6>
                  <p className="fw-bold text-success m-0">Open Today</p>
                  <p>{storage.working_hours}</p>
                  <p className="fw-bold  m-0">This Location has:</p>
                  <>
                    {storage.storage_types.map((type) => {
                      return (
                        <>
                          {type.title === "indoor_storage" && (
                            <MdCameraIndoor
                              size={20}
                              className="mineTextOrange"
                            />
                          )}
                          {type.title === "outdoor" && (
                            <MdOutlineCameraOutdoor
                              size={20}
                              className="mx-2 mineTextOrange"
                            />
                          )}
                          {type.title === "climate_control" && (
                            <BsSpeedometer
                              size={20}
                              className="mineTextOrange"
                            />
                          )}
                        </>
                      );
                    })}
                  </>
                </div>
                <div className="d-none d-md-block">
                  <h6>Access Hours:</h6>
                  <p>{storage.access_hours}</p>
                </div>
                <div>
                  From <h5>${storage.minimum_price}</h5>
                  <Link to={`/storages/results/${storage.id}`}>
                    <button className="border-0 p-2 bg-orange rounded text-light">
                      View Rates
                    </button>
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default StorageUnitsList;
