import React from "react";
import AdminComplaintAssign from "./AdminComplaintAssign";

import { ComplaintProvider } from "../../contexts/complaintContext";

const index = () => {
  return (
    <ComplaintProvider>
      <AdminComplaintAssign />
    </ComplaintProvider>
  );
};

export default index;
