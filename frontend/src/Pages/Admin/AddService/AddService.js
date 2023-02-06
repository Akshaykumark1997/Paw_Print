import React from "react";
import NavBarAdmin from "../../../Components/Admin/NavBarAdmin/NavBarAdmin";
import AddGrooming from "../../../Components/Admin/AddGrooming/AddGrooming";

function AddService() {
  return (
    <div className="d-flex">
      <div>
        <NavBarAdmin />
      </div>
      <div className="flex-grow-1 container">
        <AddGrooming />
      </div>
    </div>
  );
}

export default AddService;
