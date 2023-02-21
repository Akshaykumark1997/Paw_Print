import React from "react";
import EditGrooming from "../../../Components/Admin/EditGrooming/EditGrooming";
import NavBarAdmin from "../../../Components/Admin/NavBarAdmin/NavBarAdmin";

function EditService() {
  return (
    <div className="d-flex">
      <div>
        <NavBarAdmin />
      </div>
      <div className="flex-grow-1 container">
        <EditGrooming />
      </div>
    </div>
  );
}

export default EditService;
