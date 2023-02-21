import React from "react";
import Appointments from "../../../Components/Employee/Appointments/Appointments";
import EmployeeNavBar from "../../../Components/Employee/NavBar/EmployeeNavBar";

function EmployeeHome() {
  return (
    <div className="d-flex  ">
      <div>
        <EmployeeNavBar />
      </div>
      <div className="flex-grow-1 container">
        <Appointments />
      </div>
    </div>
  );
}

export default EmployeeHome;
