import React from "react";
import AdminViewAllComplaints from "./AdminViewAllComplaints";

import { ComplaintProvider } from "../../contexts/complaintContext";
import { AdminProvider } from "../../contexts/AdminContext";

const index = () => {
  return (
     <AdminProvider>
      <ComplaintProvider>
      <AdminViewAllComplaints />
      </ComplaintProvider> 
    </AdminProvider>
  );
};

export default index;
