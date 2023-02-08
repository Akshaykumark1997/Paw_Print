import React from "react";
import Footer from "../../../Components/User/Footer/Footer";
import About from "../../../Components/User/Home/About";
import Adoption from "../../../Components/User/Home/Adoption";
import Hero from "../../../Components/User/Home/Hero";
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
      <Footer />
    </div>
  );
}

export default UserHome;
