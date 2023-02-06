import React from "react";
import ViewEmployees from "../../../Components/Admin/Employees/ViewEmployees";
import NavBarAdmin from "../../../Components/Admin/NavBarAdmin/NavBarAdmin";

function Employees() {
  return (
    <div className="d-flex  ">
      <div>
        <NavBarAdmin />
      </div>
      <div className="flex-grow-1 container">
        <ViewEmployees />
      </div>
    </div>
  );
}

export default Employees;
