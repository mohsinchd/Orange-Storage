import React from "react";

const StorageUnitsTableFilter = ({ filter, setFilter }) => {
  return (
    <div className="d-flex justify-content-end align-items-center mb-3">
      <span className="me-2">Filter </span>{" "}
      <input
        type="text"
        value={filter || ""}
        className="border border-1 rounded p-2"
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default StorageUnitsTableFilter;
