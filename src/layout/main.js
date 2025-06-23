// src/layouts/MainLayout.js
import React from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
}
