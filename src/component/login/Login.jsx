import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Regular expression for validating an Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Invalid email address. Please enter a valid email.");
      return;
    }
    // Perform login logic here, e.g., send data to API
    console.log("Login submitted:", email, password);
  };

  return (
    <div className="wrapper">
      <h1>Sign in</h1>

      <form onSubmit={handleSubmit}>
        <div className="innercontent">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn" type="submit">
          Sign in
        </button>
      </form>
      <div className="signup">
        <h3>Don't have an account?</h3>
        <Link to="/signup">
          <button className="btn signup-btn">Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
