import React from "react";
import ViewPets from "../../../Components/Admin/Adoption/ViewPets";
import NavBarAdmin from "../../../Components/Admin/NavBarAdmin/NavBarAdmin";

function AdoptionDetails() {
  return (
    <div className="d-flex  ">
      <div>
        <NavBarAdmin />
      </div>
      <div className="flex-grow-1 container">
        <ViewPets />
      </div>
    </div>
  );
}

export default AdoptionDetails;
