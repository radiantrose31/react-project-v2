import React from "react";



export default function AccountSettings({ searchTerm, setSearchTerm, showNotif, setShowNotif, showHelp, setShowHelp, showUser, setShowUser }) {
  return (
    <>
      
      {showNotif && <div className="popup">No new notifications</div>}
      {showHelp && <div className="popup center-popup">Help content goes here...</div>}
      {showUser && <div className="popup center-popup">User settings menu...</div>}

      <div className="account-settings-page main-content">
        <h2>User Profile</h2>
        <p>Name: XYZ</p>
        <p>Email: xyz@gmail.com</p>
        <p>Role: Engineer</p>
        <hr />
        <h3>Settings</h3>
        <label>
          <input type="checkbox" checked readOnly /> Enable Email Alerts
        </label>
        <br />
        <label>
          <input type="checkbox" /> Enable Dark Mode
        </label>
        <hr />
        <h3>Security Settings</h3>
        <p>Password Last Changed: 2025-05-20</p>
        <button>Change Password</button>
        <br /><br />
        <button className="logout" style={{ background: "#e53935" }}>Delete Account</button>
      </div>
    </>
  );
}
 
