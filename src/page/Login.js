// src/pages/Login.js
import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login validation logic
    if (email === "aditi@example.com" && password === "password") {
      navigate("/dashboard");
    } else {
      setError("Incorrect email or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2 className="main-heading">Threat Intelligence Platform</h2>
        <p className="login-subtitle">Sign in to your account</p>

        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error-msg">{error}</p>}

          <button type="submit">Log In</button>
        </form>

        <div className="login-links">
          <a href="#">Forgot Password?</a>
          <a href="https://www.bing.com/search?q=github+&form=ANSPH1&refig=7d7fe12aadb344468ac2be5ace808929&pc=ASTS">Need Help?</a>
        </div>
      </div>
    </div>
  );
}
