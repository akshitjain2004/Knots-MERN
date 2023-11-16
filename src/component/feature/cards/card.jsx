import React, { useState } from "react";
import "./card.css";
import wed from "../../../assets/vecteezy_indian-wedding-couple-character-bride-and-groom_12011841_610.png";

function Cards() {
  const [message, setMessage] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [names, setNames] = useState("");

  function applyChanges() {
    // You can perform any additional logic or validation before applying the changes.
    // For simplicity, I'm directly applying the changes here.
    document.getElementById("dynamicText1").innerText =
      message || "Default Message";
    document.getElementById("dynamicText2").innerText =
      venue || "Default Venue";
    document.getElementById("dynamicText3").innerText = date || "Default Date";
    document.getElementById("dynamicText4").innerText =
      names || "Default Names";
  }

  return (
    <>
      <div className="wedinput">
        <label htmlFor="inputField1">Enter Your Message: </label>
        <input
          type="text"
          id="inputField1"
          placeholder="Write your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={32}
        />
        <label htmlFor="inputField2">Enter Venue: </label>
        <input
          type="text"
          id="inputField2"
          placeholder="Your wedding venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          maxLength={32}
        />
        <label htmlFor="inputField3">Enter Date: </label>
        <input
          type="text"
          id="inputField3"
          placeholder="Your wedding date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          maxLength={32}
        />
        <label htmlFor="inputField4">Your Names: </label>
        <input
          type="text"
          id="inputField4"
          placeholder="Your names"
          value={names}
          onChange={(e) => setNames(e.target.value)}
          maxLength={32}
        />
        <button onClick={applyChanges}>Apply Changes</button>
      </div>
      <div className="cards-f">
        <div className="text-f">
          <h1 id="dynamicText1">Write you message</h1>
          <h3 id="dynamicText2">Your Venue</h3>
          <h3 id="dynamicText3">Your Wedding Date</h3>
          <p id="dynamicText4">Your Names</p>
          <img src={wed} alt="wedding" className="wedding" />
        </div>
        <div className="whatsapp-func">
          {" "}
          <a
            href="whatsapp://send?text=We all welcome to our wedding. Please Join us to our speical day."
            data-action="share/whatsapp/share"
            target="_blank"
          >
            {" "}
            <i className="uil uil-whatsapp"></i>{" "}
          </a>{" "}
        </div>

        <div className="space"></div>
      </div>
    </>
  );
}

export default Cards;
