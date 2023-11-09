import "./App.css";
import Footer from "./component/footer/Footer";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";
import Contact from "./component/contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Fragment } from "react";
import Service from "./component/service/Service";
import Vendors from "./component/service/vendors/vendors";
import Ambrosia from "./component/service/vendors/ambrosia/Ambrosia";
import Login from "./component/login/Login";
import Signup from "./component/signup/Signup";
function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/service/vendors" element={<Vendors />} />
          <Route path="/service/vendors/Ambrosia" element={<Ambrosia />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
