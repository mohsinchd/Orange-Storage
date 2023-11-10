import React from "react";

const Spinner = () => {
  return (
    <div
      class="spinner-border text-dark"
      role="status"
      style={{
        width: "120px",
        height: "120px",
        margin: "auto",
        display: "block",
      }}
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spinner;
