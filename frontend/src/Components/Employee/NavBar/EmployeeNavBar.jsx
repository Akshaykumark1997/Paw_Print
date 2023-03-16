import React, { useEffect, useState } from "react";
import axios from "../../../Axios/Axios";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

function EmployeeNavBar() {
  const token = localStorage.getItem("employeeToken");
  const [employee, setEmployee] = useState("");
  const handleLogout = () => {
    localStorage.removeItem("employeeToken");
    window.location = "/employee";
  };
  useEffect(() => {
    axios
      .get("/employee/getEmployee", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data.employee.position);
        setEmployee(response.data.employee.position);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Employee
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="">
              <CDBSidebarMenuItem icon="table">Schedule</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/employee/appointments">
              <CDBSidebarMenuItem icon="user">Appointment</CDBSidebarMenuItem>
            </NavLink>
            {employee === "Doctor" ? (
              <NavLink to="/employee/consultation">
                <CDBSidebarMenuItem icon="user">
                  Consultation
                </CDBSidebarMenuItem>
              </NavLink>
            ) : (
              <NavLink to="" />
            )}
            <NavLink to="">
              <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
            </NavLink>
            <CDBSidebarMenuItem
              icon="exclamation-circle"
              onClick={handleLogout}
            >
              Logout
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
}

export default EmployeeNavBar;
