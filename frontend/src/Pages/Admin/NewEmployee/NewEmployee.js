import React from "react";
import AddEmployee from "../../../Components/Admin/AddEmployee/AddEmployee";
import NavBarAdmin from "../../../Components/Admin/NavBarAdmin/NavBarAdmin";

function NewEmployee() {
  return (
    <div className="d-flex  ">
      <div>
        <NavBarAdmin />
      </div>
      <div className="flex-grow-1 container">
        <AddEmployee />
      </div>
    </div>
  );
}

export default NewEmployee;
