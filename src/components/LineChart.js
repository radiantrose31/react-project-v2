import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function LineChart() {
  const canvasRef = useRef();

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["ddon", "3319", "3313", "PT43", "FIN6", "3782", "2633", "FIN8", "5296", "5224"],
        datasets: [
          {
            data: [-80, -58, -65, -55, -5, -14, -19, 5, 10, 25],
            borderColor: "rgba(255,0,0,1)",
            fill: false,
            tension: 0,
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: false } },
      },
    });

    return () => chart.destroy();
  }, []);

  return <canvas ref={canvasRef} width="400" height="200" />;
}

export default LineChart;

