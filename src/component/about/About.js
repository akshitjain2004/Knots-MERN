import React from "react";

import "./About.css";

function About() {
  return (
    <section className="howitworks">
      <header>
        <div className="heading"><h1>HOW THIS WORKS?</h1></div>
        <p>
          Found the one? Let us make it easy for you to plan your wedding so you
          dont have to end up in tears.
        </p>
      </header>
      <div className="card__container">
        <div className="card-hf">
          <i className="uil uil-search"></i>
          <p>STEP 1</p>
          <h2>Select Vendors</h2>
        </div>
        <div className="card-hf">
          <i className="uil uil-arrow"></i>
          <p>STEP 2</p>
          <h2>Compare Vendors</h2>
        </div>
        <div className="card-hf">
          <i className="uil uil-check"></i>
          <p>STEP 3</p>
          <h2>Visit and Book</h2>
        </div>
        <div className="card-hf">
          <i className="uil uil-glass-martini"></i>
          <p>STEP 4</p>
          <h2>Enjoy the Wedding</h2>
        </div>
      </div>
    </section>
  );
}

export default About;
