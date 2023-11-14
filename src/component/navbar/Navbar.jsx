import React, { useEffect, useState, Component, useContext } from "react";
import { auth } from "firebase/auth";
import { SigninContext } from "../../App";

import "./Navbar.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
  Link,
} from "react-router-dom";

const Navbar = () => {
  const { signedIn, setSignedIn } = useContext(SigninContext);
  const [signedState, setSignedState] = useState("Sign In");

  useEffect(() => {
    if (signedIn) {
      setSignedState("Sign Out");
    } else {
      setSignedState("Sign In");
    }
  }, [signedIn]);

  return (
    <>
      <nav>
        <a href="/" className="active">
          <h1> Knots</h1>
        </a>
        <div className="navbardets">
          <ul
            id="navbar"
            // className={this.state.clicked ? "#navbar active" : "#navbar"}
          >
            <li>
              <Link to="/service">Our Services</Link>
            </li>

            <li>
              <a href="#destination">Destination Wedding </a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <Link to="/contact">Contact </Link>
            </li>
            <li>
              <Link to="/signin">{signedState}</Link>
            </li>
          </ul>
        </div>

        {/* <div id="mobile" onClick={this.handleClick}>
          <i
            id="bar"
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
