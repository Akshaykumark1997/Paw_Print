import React from "react";
import Footer from "../../../Components/User/Footer/Footer";
import NavBar from "../../../Components/User/NavBar/NavBar";
import ViewPets from "../../../Components/User/ViewPets/ViewPets";

function Pets() {
  return (
    <div>
      <NavBar />
      <ViewPets />
      <Footer />
    </div>
  );
}

export default Pets;
