import React from "react";
import { GrMapLocation } from "react-icons/gr";

const TopCards = () => {
  return (
    <>
      <h1 className="text-center d-none">
        How
        <span className="mineTextOrange"> Orange Storage</span> Works{" "}
      </h1>
      <div className="row mt-3">
        <div className="col-md-4 text-center">
          <img
            src="/images/locationIcon.png"
            alt="png"
            className="img-fluid w-50"
          />
          <h3>Tell us When and where</h3>
          <p>
            Get set up in less than 30 seconds and you'll never have to give out
            directions again.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <img src="/images/list.png" alt="png" className="img-fluid w-50" />
          <h3>Choose with confidence</h3>
          <p>
            Be certain you get the right lawn pro with OrangePal's verified
            reviews
          </p>
        </div>
        <div className="col-md-4 text-center">
          <img src="/images/payment.png" alt="png" className="img-fluid w-50" />
          <h3>Schedule & Pay Online</h3>
          <p>Never deal with another invoice or mail another check again</p>
        </div>
      </div>
    </>
  );
};

export default TopCards;
