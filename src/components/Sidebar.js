// src/components/Sidebar.js
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";


function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Actors", path: "/actors" },
    { name: "Organization", path: "/organization" },
    { name: "Malware & Tools", path: "/malware-tools" },
    { name: "Vulnerabilities", path: "/vulnerabilities" },
    { name: "Account Settings", path: "/account-settings" },
  ];

  const handleLogout = () => alert("Logging out...");

  return (
    <nav className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
      <div className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
        &#9776;
      </div>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={location.pathname === item.path ? "active-menu-item" : ""}
            onClick={() => navigate(item.path)}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <div className="logout-button">
        <button className="logout" onClick={handleLogout}>
          <i className="fas fa-right-from-bracket"></i> Logout
        </button>
      </div>
    </nav>
  );
}

export default Sidebar;
 
