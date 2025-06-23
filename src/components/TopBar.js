// src/components/TopBar.js
import React from "react";


function TopBar({ title, searchTerm, setSearchTerm }) {
  return (
    <div className="top-bar">
      <h1 className="heading">Threat Intelligence Platform - {title}</h1>
      <div className="top-actions">
        <div className="search-wrapper">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            placeholder="Search IOCs"
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="icon-btn"><i className="fas fa-bell"></i></button>
        <button className="icon-btn"><i className="fas fa-circle-question"></i></button>
        <button className="icon-btn"><i className="fas fa-user"></i></button>
      </div>
    </div>
  );
}

export default TopBar;
 
