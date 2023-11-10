import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Features = ({ product, storageFacility }) => {
  return (
    <div>
      <ul className="list-group box-shadow">
        <li className="list-group-item p-3">
          <h5>Features Available at this Facility:</h5>
          <div className="mt-2">
            <p>
              {" "}
              <BsFillCheckCircleFill size={20} className="text-success" />{" "}
              Elevator Access
            </p>
            <p>
              {" "}
              <BsFillCheckCircleFill size={20} className="text-success" />{" "}
              Interior Storage Units
            </p>
            <p>
              {" "}
              <BsFillCheckCircleFill size={20} className="text-success" /> Low
              cost insurance available
            </p>
            <p>
              {" "}
              <BsFillCheckCircleFill size={20} className="text-success" />{" "}
              Online payments
            </p>
          </div>
        </li>
        <li className="list-group-item p-3">
          <h5>Hours</h5>
          <p>{storageFacility.working_hours}</p>
          <h5>Storage Access Hours</h5>
          <p>{storageFacility.access_hours}</p>
          <img src={product.image} className="img-fluid rounded" alt="lsdfj" />
          <p className="text-center fw-bold mt-3">View Photos</p>
        </li>
      </ul>
    </div>
  );
};

export default Features;
