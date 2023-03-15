import React from "react";
import DonatedPets from "../../../Components/User/DonatedPets/DonatedPets";
import Footer from "../../../Components/User/Footer/Footer";
import NavBar from "../../../Components/User/NavBar/NavBar";

function DonatedPetDetails() {
  return (
    <div>
      <NavBar />
      <DonatedPets />
      <Footer />
    </div>
  );
}

export default DonatedPetDetails;
