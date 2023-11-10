import React from "react";

const HoursModal = ({ storageFacility }) => {
  return (
    <>
      <div
        className="modal fade"
        id="hoursModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
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
              <h5>Hours</h5>
              <p>{storageFacility.working_hours}</p>
              <h5>Storage Access Hours</h5>
              <p>{storageFacility.access_hours}</p>
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

export default HoursModal;
