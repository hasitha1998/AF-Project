import React from "react";
import AdminComplaintPending from "./AdminComplaintPending";

import { ComplaintProvider } from "../../contexts/complaintContext";

const index = () => {
  return (
    <ComplaintProvider>
      <AdminComplaintPending />
    </ComplaintProvider>
  );
};

export default index;