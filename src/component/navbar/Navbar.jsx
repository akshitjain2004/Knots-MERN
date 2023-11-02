import React, { Component } from "react";
import "./Navbar.css";

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
          <a href="index.html" className="active">
            <h1> Knots</h1>
          </a>
          <div className="navbardets">
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a href="index.html">Vendors</a>
              </li>

              <li>
                <a href="#roadmap">Destination Wedding </a>
              </li>
              <li>
                <a href="#blogs">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
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
