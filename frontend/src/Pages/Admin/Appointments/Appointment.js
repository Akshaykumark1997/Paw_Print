import React from "react";
import Appointments from "../../../Components/Admin/Appointments/ViewAppointments";
import NavBarAdmin from "../../../Components/Admin/NavBarAdmin/NavBarAdmin";

function Appointment() {
  return (
    <div className="d-flex  ">
      <div>
        <NavBarAdmin />
      </div>
      <div className="flex-grow-1 container">
        <Appointments />
      </div>
    </div>
  );
}

export default Appointment;
