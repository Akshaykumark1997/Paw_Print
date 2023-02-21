import React from "react";
import AppointmentForm from "../../../Components/User/Appointment/AppointmentForm";
// import Form from "../../../Components/User/Appointment/Form";
import Footer from "../../../Components/User/Footer/Footer";
import NavBar from "../../../Components/User/NavBar/NavBar";

function AppointmentBooking() {
  return (
    <div>
      <NavBar />
      {/* <Form /> */}
      <AppointmentForm />
      <Footer />
    </div>
  );
}

export default AppointmentBooking;
