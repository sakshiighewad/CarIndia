
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Component/Header";
import Footer from "./Component/Footer";

import Home from "./Layout/Home";
import About from "./Layout/About";

import AirFelter from "./Services/AirFelter.jsx";
import EngineGeneralServicing from "./Services/EngineGeneralServicing";
import BookServiceForm from "./Services/BookServiceForm";
import Oilpart from "./Services/Oilpart.jsx";
import WheelG from "./Services/WheelG.jsx";
import Contact from "./Layout/Contact.jsx";
import GarageBilling from "./Services/GarageBilling.jsx";

function App() {
  return (
    <Router>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/airfelter" element={<AirFelter />} />
        <Route path="/enginegeneralservicing" element={<EngineGeneralServicing />} />
        <Route path="/oilpart" element={<Oilpart />} />
        <Route path="/bookserviceform" element={<BookServiceForm />} />
        <Route path="/wheelg" element={<WheelG />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/garagebilling" element={<GarageBilling />} />
      </Routes >

      <Footer />

    </Router >
  );
}

export default App;



