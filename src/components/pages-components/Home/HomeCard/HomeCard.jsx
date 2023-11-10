import React, { useState } from "react";
import { FaStore, FaBusinessTime } from "react-icons/fa";
import { MdOutlineEmojiTransportation } from "react-icons/md";

import BusinessStorage from "./BusinessUnitStorage/BusinessUnitStorage";
import UnitStorageForm from "./UnitStorageForm/UnitStorageForm";
import ValueAddedServices from "./ValueAddedServices/ValueAddedServices";

const HomeCard = () => {
  const [showUnitStorageForm, setShowUnitStorageForm] = useState(true);
  const [showBusinessStorageForm, setshowBusinessStorageForm] = useState(false);
  const [showValueAddedServices, setshowValueAddedServices] = useState(false);

  const unitStorageHandler = (e) => {
    setshowBusinessStorageForm(false);
    setShowUnitStorageForm(true);
    setshowValueAddedServices(false);
  };

  const buisnessStorageHandler = (e) => {
    setShowUnitStorageForm(false);
    setshowBusinessStorageForm(true);
    setshowValueAddedServices(false);
  };

  const valueAddedHandler = (e) => {
    setShowUnitStorageForm(false);
    setshowBusinessStorageForm(false);
    setshowValueAddedServices(true);
  };

  return (
    <div className="card card-body home-card w-50 p-0 showcase-card h-100 ">
      <div className="row">
        <div
          className={`col-12 left-box card-boxes ${
            showUnitStorageForm ? "selected-box" : ""
          }`}
          onClick={unitStorageHandler}
        >
          <div className="pt-3 d-flex flex-column justify-content-center align-items-center">
            <FaStore size={20} />
            <h6>Unit Storage</h6>
          </div>
        </div>
        {/* <div
          className={`col-4 center-box card-boxes ${
            showBusinessStorageForm ? "selected-box" : ""
          }`}
          onClick={buisnessStorageHandler}
        >
          <div className="pt-3 d-flex flex-column justify-content-center align-items-center">
            <FaBusinessTime size={20} />
            <h6>Business Unit Storage</h6>
          </div>
        </div>

        <div
          className={`col-4 right-box card-boxes ${
            showValueAddedServices ? "selected-box" : ""
          }`}
          onClick={valueAddedHandler}
        >
          <div className="pt-3 d-flex flex-column justify-content-center align-items-center">
            <MdOutlineEmojiTransportation size={20} />
            <h6>Value Added Services</h6>
          </div>
        </div> */}
      </div>
      {showUnitStorageForm && <UnitStorageForm />}
      {/* {showBusinessStorageForm && <BusinessStorage />}
      {showValueAddedServices && <ValueAddedServices />} */}
    </div>
  );
};

export default HomeCard;
