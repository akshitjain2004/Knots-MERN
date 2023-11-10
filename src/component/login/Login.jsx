import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import {signInWithEmailAndPassword} from "firebase/auth"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
   
    signInWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        console.log(userCredential)
        alert("Successfully signed in");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="wrapper">
      <h1>Sign in</h1>

      <form onSubmit={signIn}>
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
        <button onClick={signIn} className="btn" type="submit">
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
