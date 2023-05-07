import React from "react";
import AdminViewAllComplaints from "./AdminViewAllComplaints";

import { ComplaintProvider } from "../../contexts/ComplaintContext";

const index = () => {
  return (
   
      <ComplaintProvider>
      <AdminViewAllComplaints />
      </ComplaintProvider> 

  );
};

export default index;
