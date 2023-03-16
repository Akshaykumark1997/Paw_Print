import React from "react";
import About from "../../../Components/User/Clinics/About";
// import Consultation from "../../../Components/User/Clinics/Consultation";
import Hero from "../../../Components/User/Clinics/Hero";
import OnlineConsultation from "../../../Components/User/Clinics/OnlineConsultation";
import Footer from "../../../Components/User/Footer/Footer";
import NavBar from "../../../Components/User/NavBar/NavBar";

function ViewClinics() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      {/* <Consultation /> */}
      <OnlineConsultation />
      <Footer />
    </div>
  );
}

export default ViewClinics;
