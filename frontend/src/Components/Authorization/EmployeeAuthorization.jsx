import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function EmployeeAuthorization() {
  const employee = localStorage.getItem("employeeToken");
  return employee ? <Outlet /> : <Navigate />;
}

export default EmployeeAuthorization;
