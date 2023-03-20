import React from "react";
import Users from "../../../Components/Admin/Users/Users";
import NavBarAdmin from "../../../Components/Admin/NavBarAdmin/NavBarAdmin";

function ViewUsers() {
  return (
    <div className="d-flex  ">
      <div>
        <NavBarAdmin />
      </div>
      <div className="flex-grow-1 container">
        <Users />
      </div>
    </div>
  );
}

export default ViewUsers;
