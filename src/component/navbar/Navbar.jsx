import React, { Component } from "react";
import "./Navbar.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
  Link,
} from "react-router-dom";
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };
  render() {
    return (
      <>
        <nav>
          <a href="/" className="active">
            <h1> Knots</h1>
          </a>
          <div className="navbardets">
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a href="#">Vendors</a>
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
                <a href="#contact">Sign In</a>
              </li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
