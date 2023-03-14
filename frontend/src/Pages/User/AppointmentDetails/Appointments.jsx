import React from "react";
import AppointmentDetails from "../../../Components/User/AppointmentDetails/AppointmentDetails";
import Footer from "../../../Components/User/Footer/Footer";
import NavBar from "../../../Components/User/NavBar/NavBar";

function Appointments() {
  return (
    <div>
      <NavBar />
      <AppointmentDetails />
      <Footer />
    </div>
  );
}

export default Appointments;
