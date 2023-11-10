import React from "react";

const UnitStorageCheckbox = () => {
  return (
    <div className="row mt-2 ">
      <label>Select Types</label>
      <div className="col-md-2">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="MovingHomes" />
          <label class="form-check-label" for="flexCheckDefault">
            Moving homes
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="naturalDisasters"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Natural Disasters
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="accidentalLandlord"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Accidental Landlord
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="hoarding" />
          <label class="form-check-label" for="flexCheckDefault">
            Hoarding
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="recreationalVehicles"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Recreational Vehicles
          </label>
        </div>
      </div>
    </div>
  );
};

export default UnitStorageCheckbox;
