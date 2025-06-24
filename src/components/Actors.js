import React, { useState } from "react";
import "./ActorsPage.css"; 

const allRegions = ["All", "Africa", "Asia", "Europe", "North America"];
const allIndustries = ["All", "Finance", "Government", "Healthcare", "Energy"];
const allMalware = ["All", "Emotet", "TrickBot", "LokiBot", "Cobalt Strike"];
const allTools = ["All", "Mimikatz", "Metasploit", "C2", "PowerShell"];

export default function ActorsPage({ filteredBars = [], activeBar, handleBarClick }) {
  const [regionFilter, setRegionFilter] = useState("All");
  const [industryFilter, setIndustryFilter] = useState("All");
  const [malwareFilter, setMalwareFilter] = useState("All");
  const [toolFilter, setToolFilter] = useState("All");

  // Filter logic
  const filteredActors = filteredBars.filter((bar) => {
    return (
      (regionFilter === "All" || bar.region === regionFilter) &&
      (industryFilter === "All" || bar.industry === industryFilter) &&
      (malwareFilter === "All" || bar.malware?.includes(malwareFilter)) &&
      (toolFilter === "All" || bar.tools?.includes(toolFilter))
    );
  });

  return (
    <div className="actors-page">
      <h2 className="section-title">Threat Actors</h2>

      {/* Filters */}
      <div className="filters">
        <select onChange={(e) => setRegionFilter(e.target.value)} value={regionFilter}>
          {allRegions.map((region) => <option key={region}>{region}</option>)}
        </select>

        <select onChange={(e) => setIndustryFilter(e.target.value)} value={industryFilter}>
          {allIndustries.map((ind) => <option key={ind}>{ind}</option>)}
        </select>

        <select onChange={(e) => setMalwareFilter(e.target.value)} value={malwareFilter}>
          {allMalware.map((m) => <option key={m}>{m}</option>)}
        </select>

        <select onChange={(e) => setToolFilter(e.target.value)} value={toolFilter}>
          {allTools.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>

      {/* Bar Chart */}
      <div className="actor-bars">
        {filteredActors.map((bar, index) => (
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

      {/* Cards Section */}
      <div className="actor-cards">
        {filteredActors.map((actor, index) => (
          <div className="actor-card" key={index}>
            <h3>{actor.title}</h3>
            <p><strong>Region:</strong> {actor.region}</p>
            <p><strong>Industry:</strong> {actor.industry}</p>
            <p><strong>Malware:</strong> {actor.malware?.join(", ")}</p>
            <p><strong>Tools:</strong> {actor.tools?.join(", ")}</p>
            <div className="actor-graph-placeholder">
              <p>[Graph Placeholder]</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
