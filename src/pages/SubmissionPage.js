import React from "react";
import Chart from "react-apexcharts";

function SubmissionPage() {
  const series = [
    {
      name: "series-1",
      data: [20, 30, 40, 50],
    },
    {
      name: "series-2",
      data: [90, 80, 70, 60],
    },
  ];

  const option = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994],
    },
  };

  return (
    <div>
      <Chart options={option} series={series} type="bar" width="500" />
    </div>
  );
}

export default SubmissionPage;
