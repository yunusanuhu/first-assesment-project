import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import logo from "../../logo.png";
import loginPicture from "../../login-picture.png";

export default function Login({ setToken }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple validation
    if (username === "admin" && password === "password") {
      navigate("/dashboard"); // Redirect to Dashboard
    } else {
      setError("Invalid: username='admin', password='password'");
    }
  };
  return (
    <div className="login-page">
      <div className="left">
        <img className="logo" src={logo} alt="" />
        <img className="login-picture" src={loginPicture} alt="" />
      </div>
      <div className="right">
        <div className="login">
          <h1 className="enterdetails">Welcome!</h1>
          <p>Enter details to login</p>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit} className="main-form">
            <input
              className="login-input"
              type="text"
              placeholder="Email"
              onChange={(e) => setUserName(e.target.value)}
            />
            <div className="password-container">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
              />
              <span className="password-toggle">SHOW</span>
            </div>

            <p>
              <a className="forgot-password" href="#">
                forgot password?
              </a>
            </p>
            <button type="submit" className="btn">
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
