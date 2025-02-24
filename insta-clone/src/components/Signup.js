import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    username: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <img
          className="logo"
          src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
          alt="logo"
        />
        <p className="signup-text">
          Sign up to see photos and videos from your friends.
        </p>
        <button className="facebook-btn">Log in with Facebook</button>
        <div className="or-divider">
          <span className="line"></span>
          <span className="or-text">OR</span>
          <span className="line"></span>
        </div>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            name="email"
            placeholder="Mobile Number or Email"
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
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="input-field"
            required
          />
          <p className="info-text">
            People who use our service may have uploaded your contact
            information to Instagram.{" "}
            <a
              href="https://www.facebook.com/help/instagram/261704639352628"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </p>
          <p className="terms-text">
            By signing up, you agree to our{" "}
            <a
              href="https://help.instagram.com/581066165581870/?locale=en_US"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms
            </a>
            ,{" "}
            <a
              href="https://www.facebook.com/privacy/policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            , and{" "}
            <a
              href="https://privacycenter.instagram.com/policies/cookies"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cookies Policy
            </a>
            .
          </p>

          <button type="submit" className="signup-btn">
            Sign up
          </button>
        </form>
      </div>
      <div className="login-box">
        <p>
          Have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
