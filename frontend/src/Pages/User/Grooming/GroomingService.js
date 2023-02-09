import React from "react";
import Hero from "../../../Components/User/Grooming/Hero";
import NavBar from "../../../Components/User/NavBar/NavBar";
import About from "../../../Components/User/Grooming/About";
import Service from "../../../Components/User/Grooming/Service";
import Appointment from "../../../Components/User/Grooming/Appointment";
import Footer from "../../../Components/User/Footer/Footer";

function GroomingService() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Service />
      <Appointment />
      <Footer />
    </div>
  );
}

export default GroomingService;
