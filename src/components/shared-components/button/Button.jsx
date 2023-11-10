import React from "react";

const Button = ({ info }) => {
  return (
    <button
      className={`btn ${info === "Sign In" ? "btn-outline-dark" : "btn-dark"}`}
    >
      {info}
    </button>
  );
};

export default Button;
