import React, { useState } from "react";
import { FaFilter, FaUserSecret } from "react-icons/fa";
import { topActorData, actorCards } from "../data/mockData";

export default function ActorsPage() {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilter = () => setShowFilters(!showFilters);

  return (
    <div className="actors-page main-content">
      <div className="top-bar">
        <button className="filter-icon-btn" onClick={toggleFilter}>
          <FaFilter />
        </button>
      </div>

      {showFilters && (
        <div className="filter-dropdown">
          <div className="filter-header">
            <span>Filters</span>
            <button onClick={toggleFilter}>X</button>
          </div>
          <input className="filter-search" type="text" placeholder="Search Actor..." />

          <div className="filter-group">
            <div className="filter-group-title">Actor Region</div>
            {["Africa", "Asia", "Europe", "South Korea", "India"].map(region => (
              <label key={region}><input type="checkbox" /> {region}</label>
            ))}
          </div>

          <div className="filter-group">
            <div className="filter-group-title">Target Industries</div>
            {["Finance", "Government", "Healthcare", "Energy", "IT"].map(industry => (
              <label key={industry}><input type="checkbox" /> {industry}</label>
            ))}
          </div>

          <div className="filter-group">
            <div className="filter-group-title">Associated Malware</div>
            {["Emotet", "TrickBot", "LokiBot", "Cobalt Strike"].map(malware => (
              <label key={malware}><input type="checkbox" /> {malware}</label>
            ))}
          </div>

          <div className="filter-group">
            <div className="filter-group-title">Associated Tools</div>
            {["Metasploit", "Mimikatz", "Empire"].map(tool => (
              <label key={tool}><input type="checkbox" /> {tool}</label>
            ))}
          </div>
        </div>
      )}

      <div className="content-grid">
        <div className="square-card">
          <div className="top-card-header">
            <h4>Top Threat Actors</h4>
            <select>
              <option>Last 1 Quarter</option>
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="bar-chart">
            <div className="y-axis-labels">
              {topActorData.map((a, i) => <div key={i}>{a.name}</div>)}
            </div>
            <div className="bars">
              {topActorData.map((a, i) => (
                <div key={i} className="bar" style={{ height: `${a.height}%`, backgroundColor: "red" }}>
                  <span>{a.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {actorCards.map((actor, index) => (
          <div className="rect-card" key={index}>
            <h4>{actor.name} <FaUserSecret /></h4>
            <p><strong>Region:</strong> {actor.region}</p>
            <p><strong>Target Industries:</strong> {actor.industries.join(", ")}</p>
            <p><strong>Associated Malware:</strong> {actor.malware.join(", ")}</p>
            <p><strong>Associated Tools:</strong> {actor.tools.join(", ")}</p>
            <p><strong>Description:</strong> {actor.description.slice(0, 150)}... <a href="#">View more</a></p>
            <div style={{ textAlign: "right" }}>
              <a href="#" style={{ color: "#ccc" }}>View ↗</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
