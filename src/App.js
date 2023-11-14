import "./App.css";
import Footer from "./component/footer/Footer";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";
import Contact from "./component/contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Fragment, createContext, useState } from "react";
import Service from "./component/service/Service";
import Vendors from "./component/service/vendors/vendors";
import Ambrosia from "./component/service/vendors/ambrosia/Ambrosia";
import Login from "./component/login/Login";
import Signup from "./component/signup/Signup";
import Cards from "./component/feature/card";
export const SigninContext = createContext();
function App() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <>
      <SigninContext.Provider value={{ signedIn, setSignedIn }}>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/service/vendors" element={<Vendors />} />
            <Route path="/service/vendors/Ambrosia" element={<Ambrosia />} />
          </Routes>
          <Footer />
        </Router>
      </SigninContext.Provider>
    </>
  );
}

export default App;
