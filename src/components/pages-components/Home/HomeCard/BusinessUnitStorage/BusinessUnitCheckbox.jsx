import React from "react";

const BusinessUnitCheckbox = () => {
  return (
    <div className="row">
      <label>Select Types</label>
      <div className="col-md-4">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="wareHousing" />
          <label class="form-check-label" for="flexCheckDefault">
            Warehousing
          </label>
        </div>
      </div>
      <div className="col-md-4">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="wholesalers" />
          <label class="form-check-label" for="flexCheckDefault">
            Wholesalers
          </label>
        </div>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default BusinessUnitCheckbox;
