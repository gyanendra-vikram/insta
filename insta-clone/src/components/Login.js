import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          className="insta__logo"
          src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
          alt="logo"
        />
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            name="email"
            placeholder="Phone number, username, or email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
            required
          />
          <button type="submit" className="login-btn">
            Log in
          </button>
        </form>

        <div className="or__divider">
          <span className="or__line"></span>
          <span className="or__stext">OR</span>
          <span className="or__line"></span>
        </div>

        <button className="fb-btn">
          <i className="fa-brands fa-facebook"></i> Log in with Facebook
        </button>
        <p className="forgot__password">
          <Link to="/forgot-password">Forgot password?</Link>
        </p>
      </div>

      <div className="signup__box">
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
