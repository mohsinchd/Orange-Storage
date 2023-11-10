import React from "react";
import StorageUnitBarChart from "./StorageUnitBarChart";
import StorageUnitDoughnutChart from "./StorageUnitDoughnutChart";

const StorageUnitCharts = ({ unit }) => {
  return (
    <>
      <div className="col-md-7 mb-2">
        <div className="card h-100 ">
          <div className="card-body">
            <h5 className="mb-3 text-center">
              Storage Facility Details in Bar Chart
            </h5>
            <StorageUnitDoughnutChart unit={unit} />
          </div>
        </div>
      </div>
      <div className="col-md-5 mb-2">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="mb-3 text-center">
              Storage Facility Occupied Space
            </h5>
            <h6 className="text-center">
              Progress Bar -{" "}
              <span
                class="badge "
                style={{
                  background: "#07cdae",
                }}
              >
                Occupied Space
              </span>
            </h6>
            <StorageUnitBarChart unit={unit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default StorageUnitCharts;
