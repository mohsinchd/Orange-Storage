import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const StorageUnitDoughnutChart = ({ unit }) => {
  const [chartData, setChartData] = useState({
    labels: [unit.storage_provider.name],
    datasets: [
      {
        label: "Total Space",
        data: [unit.total_size],
        backgroundColor: "#fe7096",
      },
      {
        label: "Available Space",
        data: [unit.free_space],
        backgroundColor: "#047edf",
      },
      {
        label: "Occupied Space",
        data: [unit.occupied_space],
        backgroundColor: "#07cdae",
      },
    ],
  });
  return (
    <div className="">
      <Bar data={chartData} />
    </div>
  );
};

export default StorageUnitDoughnutChart;
