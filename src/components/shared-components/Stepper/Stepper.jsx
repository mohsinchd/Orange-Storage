import React from "react";
import { NavLink } from "react-router-dom";

const Stepper = ({ step1, step2, step3, id }) => {
  return (
    <div className="d-flex py-3">
      {step1 && (
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "nav-link text-secondary"
              : isActive
              ? "nav-link mineTextOrange"
              : "nav-link mineTextOrange"
          }
        >
          Home {">"}
        </NavLink>
      )}

      {step2 && (
        <NavLink
          to="/storages/results"
          className={({ isActive, isPending }) =>
            isPending
              ? "nav-link text-secondary"
              : isActive
              ? "nav-link mineTextOrange"
              : "nav-link"
          }
        >
          Storage Facilities {">"}
        </NavLink>
      )}

      {step3 && (
        <NavLink
          to={`/storages/results/${id}`}
          className={({ isActive, isPending }) =>
            isPending
              ? "nav-link text-secondary"
              : isActive
              ? "nav-link mineTextOrange"
              : "nav-link"
          }
        >
          Storage Units
        </NavLink>
      )}
    </div>
  );
};

export default Stepper;
