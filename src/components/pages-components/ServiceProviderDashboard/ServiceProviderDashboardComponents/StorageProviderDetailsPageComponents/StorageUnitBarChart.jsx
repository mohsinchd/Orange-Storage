import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Circle } from "rc-progress";
import { toast } from "react-toastify";

const StorageUnitBarChart = ({ unit }) => {
  let total_size = unit.total_size;
  let occupied_space = unit.occupied_space;

  let percentage = Math.floor((occupied_space / total_size) * 100);

  return (
    <div className="mt-3 d-flex justify-content-center align-items-center flex-column">
      <h6>{percentage}% Occupied</h6>
      <Circle
        percent={percentage}
        strokeWidth={6}
        trailWidth={3}
        style={{
          height: 300,
          width: 300,
        }}
        strokeLinecap="round"
        strokeColor="#07cdae"
      />
    </div>
  );
};

export default StorageUnitBarChart;
