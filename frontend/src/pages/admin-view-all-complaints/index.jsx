import React from "react";
import AdminViewAllComplaints from "./AdminViewAllComplaints";

import { ComplaintProvider } from "../../contexts/complaintContext";


const index = () => {
  return (
   
      <ComplaintProvider>
      <AdminViewAllComplaints />
      </ComplaintProvider> 

  );
};

export default index;
