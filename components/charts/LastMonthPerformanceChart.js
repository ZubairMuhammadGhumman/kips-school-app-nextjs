import React from 'react'

import { useEffect } from "react"
import { Chart } from "chart.js";
export default function LastMonthPerformanceChart(props) {

  const { width } = props

  useEffect(() => {
    var ctx = document.getElementById('myChart1').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Jan", "Fab", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
        datasets: [{
          data: [86, 114, 106, 106, 107, 111, 133, 140, 106, 107, 111,],
          label: "Applied",
          borderColor: "#3e95cd",
          backgroundColor: "#0080C7",
          fill: false,
        }, {
          data: [70, 90, 44, 60, 83, 90, 100, 44, 60, 83, 90],
          label: "Accepted",
          borderColor: "#C10000",
          backgroundColor: "#C10000",
          fill: false,
        }
        ]
      },
    });
  }, [])
  return (
    <>
      {/* line chart */}
      <div className={width + " bg-white  overflow-hidden lg:mt-8 mt-8"}>
        <canvas id='myChart1'></canvas>
      </div>
    </>
  )
}

