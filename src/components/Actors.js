import React from "react";

export default function ActorsPage({ filteredBars = [], activeBar, handleBarClick }) {
  return (
    <div className="actors-page">
      <div className="actor-bars">
        {filteredBars.map((bar, index) => (
          <div
            key={index}
            className={`actor-bar ${activeBar === bar.title ? "active" : ""}`}
            style={{ height: bar.height }}
            onClick={() => handleBarClick(bar.title)}
          >
            {bar.title}
          </div>
        ))}
      </div>
    </div>
  );
}
