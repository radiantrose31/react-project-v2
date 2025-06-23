 import React from "react";


const Bar = ({ height, title, isActive, onClick }) => (
  <div
    className={`bar ${isActive ? "active" : ""}`}
    style={{
      height,
      backgroundColor: isActive ? "#ff5555" : "red",
      cursor: "pointer"
    }}
    title={title}
    onClick={() => onClick(title)}
  >
    <span>{title}</span>
  </div>
);

export default function BarChart({ filteredBars, activeBar, handleBarClick }) {
  return (
    <div className="bar-chart">
      <div className="y-axis-labels">
        {[100, 80, 60, 40, 20, 0].map((n) => (
          <span key={n}>{n}</span>
        ))}
      </div>
      <div className="bars">
        {filteredBars.length > 0 ? (
          filteredBars.map(({ height, title }) => (
            <Bar
              key={title}
              height={height}
              title={title}
              isActive={activeBar === title}
              onClick={handleBarClick}
            />
          ))
        ) : (
          <div style={{ color: "#ccc" }}>No actors match your search.</div>
        )}
      </div>
    </div>
  );
}

