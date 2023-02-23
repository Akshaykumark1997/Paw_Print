import React from "react";
import EditAdoption from "../../../Components/Admin/EditAdoption/EditAdoption";
import NavBarAdmin from "../../../Components/Admin/NavBarAdmin/NavBarAdmin";

function EditAdoptionDetails() {
  return (
    <div className="d-flex  ">
      <div>
        <NavBarAdmin />
      </div>
      <div className="flex-grow-1 container">
        <EditAdoption />
      </div>
    </div>
  );
}

export default EditAdoptionDetails;
