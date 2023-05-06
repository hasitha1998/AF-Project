import React from "react";
import AdminComplaintView from "./AdminComplaintView";

import { AdminProvider } from "../../contexts/AdminContext";

const index = () => {
  return (
    <AdminProvider>
      <AdminComplaintView />
    </AdminProvider>
  );
};

export default index;
