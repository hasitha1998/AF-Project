import React from "react";
import AdminProfile from "./AdminProfile";

import { AdminProvider } from "../../contexts/AdminContext";

const index = () => {
  return (
    <AdminProvider>
      <AdminProfile />
    </AdminProvider>
  );
};

export default index;
