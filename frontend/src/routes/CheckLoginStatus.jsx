import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const CheckLoginStatus = () => {
  const permissionLevel = localStorage.getItem("permissionLevel");

  if (permissionLevel === "ADMIN") {
    return <Navigate to="/admin" />;
  }
  if (permissionLevel === "CUSTOMER") {
    return <Navigate to="/customer" />;
  }
  if (permissionLevel === "GOV_AUTHORITY") {
    return <Navigate to="/gov" />;
  } else {
    return <Outlet />;
  }

  // If the user is authenticated then redirect to the dashboard
  // Otherwise redirect to the login page
  // return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default CheckLoginStatus;
