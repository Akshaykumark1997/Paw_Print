import React from "react";
import EmployeeNavBar from "../../../Components/Employee/NavBar/EmployeeNavBar";
import Consultation from "../../../Components/Employee/Consultation/Consultation";

function OnlineConsultation() {
  return (
    <div className="d-flex  ">
      <div>
        <EmployeeNavBar />
      </div>
      <div className="flex-grow-1 container">
        <Consultation />
      </div>
    </div>
  );
}

export default OnlineConsultation;
