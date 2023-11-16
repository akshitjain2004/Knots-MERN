import React from "react";
import "./hf.css";
import { Link } from "react-router-dom";
function Homefeature() {
  return (
    <section className="home-feature">
      <header>
        <h1>OUR FEATURES</h1>
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
          <button className="btn-feature">
            <span>Budget Combos</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Homefeature;
