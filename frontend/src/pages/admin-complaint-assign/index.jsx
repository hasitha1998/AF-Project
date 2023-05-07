import React from "react";
import AdminComplaintAssign from "./AdminComplaintAssign";

import { ComplaintProvider } from "../../contexts/ComplaintContext";

const index = () => {
  return (
    <ComplaintProvider>
      <AdminComplaintAssign />
    </ComplaintProvider>
  );
};

export default index;
