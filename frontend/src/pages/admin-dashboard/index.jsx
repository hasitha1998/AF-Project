import React from "react";
import AdminDashboard from "./AdminDashboard";
import { AdminProvider } from "../../contexts/AdminContext";

const index = () => {
  return (
    <AdminProvider>
      <AdminDashboard />
    </AdminProvider>
  );
};

export default index;
