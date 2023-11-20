import React from "react";
import homeimg from "../../assets/final.webp";
import "./Home.css";
import Review from "../testimonial/Review";
import About from "../about/About";
import { Link } from "react-router-dom";
import Homefeature from "../homefeature/Homefeature";
import Faq from "../faqs/Faq";
import Contributors from "../contributor/Contributors"
function Home() {
  return (
    <>
      <section className="home">
        <div className="overlay"></div>
        <img src={homeimg} alt="home" />
        <div
          className="homeContent container  section__container header__container"
          id="home"
        >
          <div className="textDiv">
            <h1 className="hometitle">Create your wedding moments</h1>
            
          </div>

          <div class="header__form">
        { /* <form action="/">
              <div class="input__group">
                <label for="facility">Choose Facility</label>
                <select name="facility" id="facility">
                  <option value="option1" selected>
                    Wedding Vendor
                  </option>
                  <option value="option2">Wedding Catrer</option>
                  <option value="option3">Wedding Photographer</option>
                  <option value="option4">Wedding Decorator</option>
                </select>
              </div>
              <div class="input__group">
                <label for="checkIn">Location</label>
                <select name="location" id="location">
                  <option value="location1" selected>
                    India
                  </option>
                  <option value="location2">Agra</option>
                  <option value="location3">Chennai</option>
                  <option value="location4">Delhi</option>
                  <option value="location5">Udaipur</option>
                </select>
              </div>
            
            </form>*/
           }
            <div className="headingx"><h2>Explore our packages and vendors</h2></div>
            <center><Link to="/service">
            <button class="btnn home-btn">Find Vendors</button>
          </Link></center>
          </div>
        </div>
      </section>{" "}
      <section>
        <About />
      </section>
      <section>
        <Homefeature/>
      </section>
    
      <section>
        <Review />
      </section>  <section>
        <Faq/>
      </section>
      <section>
        <Contributors/>
      </section>
     
    </>
  );
}

export default Home;
