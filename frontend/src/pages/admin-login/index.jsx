import React from "react";
import AdminLogin from "./AdminLogin";

import { AdminProvider } from "../../contexts/AdminContext";

const index = () => {
  return (
    <AdminProvider>
      <AdminLogin />
    </AdminProvider>
  );
};

export default index;
