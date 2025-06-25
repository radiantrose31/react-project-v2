 // src/components/Dashboard.js
import React from "react";
import TopBar from "./TopBar";
import LineChart from "./LineChart";
import { statsData, actorBars } from "../data/mockData";

import "../App.css";

function Dashboard({ searchTerm, setSearchTerm }) {
  return (
    <div className="dashboard-page">
      
      <div className="content-grid">
        <div className="square-card">
          <h3>Threat Stats</h3>
          <div className="underline"></div>
          <div className="stats-boxes">
            <div className="stat-box box1">
              <div className="count">120</div>
              <div>Alerts</div>
            </div>
            <div className="stat-box box2">
              <div className="count">85</div>
              <div>Incidents</div>
            </div>
            <div className="stat-box box3">
              <div className="count">34</div>
              <div>Threats</div>
            </div>
            <div className="stat-box box4">
              <div className="count">200</div>
              <div>Logs</div>
            </div>
          </div>
        </div>
        <div className="rect-card">
          <h3>Activity Trend</h3>
          <div className="underline"></div>
          <LineChart />
        </div>
        <div className="rect-card">
          <h3>Recent Activity</h3>
          <div className="underline"></div>
          <ul>
            <li>APT28 targeted Government system</li>
            <li>FIN7 breached banking sector</li>
            <li>Phishing campaign detected in healthcare</li>
          </ul>
        </div>
        <div className="square-card">
          <h3>Quick Notes</h3>
          <div className="underline"></div>
          <p>
            General notes
            SOC analysts should monitor abnormal behaviors in actor timeline. Keep an
            eye on suspicious IPs and update threat feeds daily.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

