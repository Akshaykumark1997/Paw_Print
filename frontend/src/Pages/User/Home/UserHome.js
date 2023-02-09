import React from "react";
import Footer from "../../../Components/User/Footer/Footer";
import About from "../../../Components/User/Home/About";
import Adoption from "../../../Components/User/Home/Adoption";
import AdoptionProcess from "../../../Components/User/Home/AdoptionProcess";
import Hero from "../../../Components/User/Home/Hero";
import Pets from "../../../Components/User/Home/Pets";
import ServicesCards from "../../../Components/User/Home/ServicesCards";
import NavBar from "../../../Components/User/NavBar/NavBar";

function UserHome() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ServicesCards />
      <About />
      <Adoption />
      <AdoptionProcess />
      <Pets />
      <Footer />
    </div>
  );
}

export default UserHome;
