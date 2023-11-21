import React from "react";
import "./hf.css";
import { Link } from "react-router-dom";

function Homefeature() {
  return (
    <section className="home-feature">
      <header>
       <div className="heading"><h1>OUR FEATURES</h1></div> 
        <p>Try our features for your perfect wedding planning</p>
      </header>
      <div className="hfcontainer">
        <div className="hfcard">
     <Link to='/budgetCalc'>
          <button className="btn-feature">
            <span>Budget Calculator</span>
          </button>
          </Link>
        </div>

        <div className="hfcard">
        <Link to="/cards">
          <button className="btn-feature">
            <span>Wedding Invitation</span>
          </button>
          </Link>
        </div>

        <div className="hfcard">
        <Link to="/combos">
          <button className="btn-feature">
            <span>Budget Combos</span>
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Homefeature;
