import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

function EmployeeNavBar() {
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
            <NavLink to="">
              <CDBSidebarMenuItem icon="user">Appointment</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="">
              <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
            </NavLink>
            <CDBSidebarMenuItem
              icon="exclamation-circle"
              //   onClick={handleLogout}
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
