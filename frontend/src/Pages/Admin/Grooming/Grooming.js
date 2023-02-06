import React from "react";
import NavBarAdmin from "../../../Components/Admin/NavBarAdmin/NavBarAdmin";
import ViewGrooming from "../../../Components/Admin/ViewGrooming/ViewGrooming";

function Grooming() {
  return (
    <div className="d-flex  ">
      <div>
        <NavBarAdmin />
      </div>
      <div className="flex-grow-1 container">
        <ViewGrooming />
      </div>
    </div>
  );
}

export default Grooming;
