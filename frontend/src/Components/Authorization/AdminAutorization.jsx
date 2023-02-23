import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function AdminAutorization() {
  const admin = localStorage.getItem("adminToken");
  return admin ? <Outlet /> : <Navigate to="/admin" />;
}

export default AdminAutorization;
