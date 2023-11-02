import React from "react";

import "./About.css";

function About() {
  return (
    <section>
      <center>
        <div className="works">
          <h2>How this works</h2>
          <p>
            Found the one? Let us make it easy for you to plan your wedding so
            you dont have to end up in tears.
          </p>
        </div>
      </center>
      <div className="containers">
        <div className="stepcontainer">
          <div className="step">
            <div className="icon">
              <i class="uil uil-search"></i>
            </div>
            <div className="iconcontent">
              <h2>Step-1</h2>
              <span>Select Vendor </span>
            </div>
          </div>
        </div>
        <div className="stepcontainer">
          <div className="step">
            <div className="icon">
              <i class="uil uil-arrows"></i>
            </div>
            <div className="iconcontent">
              <h2>Step-2</h2>
              <span>Compare Vendors</span>
            </div>
          </div>
        </div>
        <div className="stepcontainer">
          <div className="step">
            <div className="icon">
              <i class="uil uil-check"></i>
            </div>
            <div className="iconcontent">
              <h2>Step-3</h2>
              <span>Visit and Book</span>
            </div>
          </div>
        </div>
        <div className="stepcontainer">
          <div className="step">
            <div className="icon">
              <i class="uil uil-glass-martini"></i>
            </div>
            <div className="iconcontent">
              <h2>Step-4</h2>
              <span>Enjoy the wedding </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
