import React from "react";
import AdminComplaintInprogress from "./AdminComplaintInprogress";

import { ComplaintProvider } from "../../contexts/ComplaintContext";

const index = () => {
  return (
    <ComplaintProvider>
      <AdminComplaintInprogress />
    </ComplaintProvider>
  );
};

export default index;
