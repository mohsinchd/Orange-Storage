import React, { useState, useEffect } from "react";

import DoughnutChart from "./DoughnutChart";
import UnitsMap from "./UnitsMap";
import Spinner from "../../../shared-components/Spinner/Spinner";

const AnalyticsMapAndChart = ({ StorageUnitData, loading }) => {
  let availableSpace = StorageUnitData.reduce(
    (acc, curr) => acc + curr.free_space,
    0
  );
  let occupiedSpace = StorageUnitData.reduce(
    (acc, curr) => acc + curr.occupied_space,
    0
  );

  const [chartData, setChartData] = useState({
    labels: ["Available Space", "Occupied Space"],
    datasets: [
      {
        label: "Storage Unit Space",
        data: [availableSpace, occupiedSpace],
        backgroundColor: ["#047edf", "#07cdae"],
      },
    ],
  });

  // Side Effects
  useEffect(() => {
    setChartData({
      labels: ["Available Space", "Occupied Space"],
      datasets: [
        {
          label: "Storage Unit Space",
          data: [availableSpace, occupiedSpace],
          backgroundColor: ["#047edf", "#07cdae"],
        },
      ],
    });
  }, [availableSpace]);

  return (
    <>
      <div className="col-md-7 mb-2">
        <div className="card h-100 ">
          <div className="card-body">
            <h5 className="mb-3">Facility Locations</h5>
            {loading ? (
              <Spinner />
            ) : (
              <UnitsMap StorageUnitData={StorageUnitData} />
            )}
          </div>
        </div>
      </div>
      <div className="col-md-5 mb-2">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="mb-3">Facility Space</h5>
            {loading ? <Spinner /> : <DoughnutChart chartData={chartData} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsMapAndChart;
