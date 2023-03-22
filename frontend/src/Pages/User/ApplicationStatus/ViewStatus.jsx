import React from "react";
import ApplicationStatus from "../../../Components/User/ApplicationStatus/ApplicationStatus";
import Footer from "../../../Components/User/Footer/Footer";
import NavBar from "../../../Components/User/NavBar/NavBar";

function ViewStatus() {
  return (
    <div>
      <NavBar />
      <ApplicationStatus />
      <Footer />
    </div>
  );
}

export default ViewStatus;
