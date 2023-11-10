import React, { useState } from "react";
import "./Signup.css";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (auth) {
          console.log(userCredential);
          alert("You're signed up. You can log in now !!");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="wrapper">
      <h1>Sign Up</h1>
      <form onSubmit={Register}>
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
        <button onClick={Register} type="submit" className="btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
