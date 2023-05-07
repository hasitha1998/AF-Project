import React from "react";
import AdminFeedManagement from "./AdminFeedManagement";

import { ComplaintProvider } from "../../contexts/ComplaintContext";

const index = () => {
  return (
    <ComplaintProvider>
      <AdminFeedManagement />
    </ComplaintProvider>
  );
};

export default index;
