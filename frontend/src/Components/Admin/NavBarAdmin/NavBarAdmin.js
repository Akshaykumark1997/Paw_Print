import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  // CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

function NavBarAdmin() {
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location = "/admin";
  };
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
            Admin
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            {/* <NavLink to="/login">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink> */}
            <NavLink to="/admin/grooming">
              <CDBSidebarMenuItem icon="table">Grooming</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/admin/appointments">
              <CDBSidebarMenuItem icon="user">Appointment</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/admin/adoption">
              <CDBSidebarMenuItem icon="user">Adoption</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/admin/employees">
              <CDBSidebarMenuItem icon="chart-line">
                Employees
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink to="/admin/users">
              <CDBSidebarMenuItem icon="exclamation-circle">
                Users
              </CDBSidebarMenuItem>
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

export default NavBarAdmin;
