import React, { useState, useEffect } from "react";

import BarChart from "./BarChart";
import RecentUnits from "./RecentUnits";

const AnalyticsRecentUnitsAndChart = ({ StorageUnitData }) => {
  const [chartData, setChartData] = useState({
    labels: StorageUnitData.map((unit) => unit.storage_provider.name),
    datasets: [
      {
        label: "Total Space",
        data: StorageUnitData.map((unit) => unit.total_size),
        backgroundColor: "#fe7096",
      },
      {
        label: "Available Space",
        data: StorageUnitData.map((unit) => unit.free_space),
        backgroundColor: "#047edf",
      },
      {
        label: "Occupied Space",
        data: StorageUnitData.map((unit) => unit.occupied_space),
        backgroundColor: "#07cdae",
      },
    ],
  });

  return (
    <>
      <div className="col-md-7 mb-2">
        <div className="card h-100 ">
          <div className="card-body">
            <h5 className="mb-3">Single Facility Analytics</h5>
            <BarChart chartData={chartData} />
          </div>
        </div>
      </div>
      <div className="col-md-5 mb-2">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="mb-3">Recent Updates</h5>
            <RecentUnits />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsRecentUnitsAndChart;
