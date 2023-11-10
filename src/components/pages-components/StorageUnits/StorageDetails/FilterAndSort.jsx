import React from "react";

const FilterAndSort = () => {
  return (
    <div className="d-flex justify-content-between">
      <h5>Sort and Filter</h5>
      <div className="dropdown">
        <span className="fw-bold me-2">Unit Types:</span>
        <button
          className="p-2 rounded bg-outline-orange dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Unit Type
        </button>
        <ul className="dropdown-menu">
          <li className="dropdown-item">Indoor Storage</li>
          <li className="dropdown-item">Outdoor Storage</li>
          <li className="dropdown-item">Climate Control</li>
        </ul>
      </div>
    </div>
  );
};

export default FilterAndSort;
