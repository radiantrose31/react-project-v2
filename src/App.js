// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Actors from "./components/Actors";
import MalwareTools from "./components/MalwareTools";
import Vulnerabilities from "./components/Vulnerabilities";
import AccountSettings from "./components/AccountSettings";
import LoginPage from "./page/Login";

import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import "./App.css";

// Layout component for pages that need sidebar + topbar
function MainLayout({ children, searchTerm, setSearchTerm }) {
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
        <TopBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {children}
      </main>
    </div>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <Routes>
        {/* Login page - without sidebar/topbar */}
        <Route path="/" element={<LoginPage />} />

        {/* All main routes wrapped in layout */}
        <Route
          path="/dashboard"
          element={
            <MainLayout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
              <Dashboard searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </MainLayout>
          }
        />
        <Route
          path="/actors"
          element={
            <MainLayout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
              <Actors searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </MainLayout>
          }
        />
        <Route
          path="/malware-tools"
          element={
            <MainLayout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
              <MalwareTools searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </MainLayout>
          }
        />
        <Route
          path="/vulnerabilities"
          element={
            <MainLayout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
              <Vulnerabilities searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </MainLayout>
          }
        />
        <Route
          path="/account-settings"
          element={
            <MainLayout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
              <AccountSettings searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </MainLayout>
          }
        />

        {/* Fallback: if unknown route, redirect to login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
