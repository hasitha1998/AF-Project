import React from "react";
import AssignedComplaints from "./AssignedComplaint";
import PendingComplaints from "./PendingComplaints";
import InProgressComplaints from "./InProgressComplaints";
import ResolvedComplaints from "./ResolvedComplaints";
import InvalidComplaints from "./InvalidComplaints";
import { ComplaintProvider } from "../../contexts/ComplaintContext";

const index = () => {
    return (
        
        <ComplaintProvider>
            <AssignedComplaints/>
            <PendingComplaints/>
            <InProgressComplaints/>
            <ResolvedComplaints/>
            <InvalidComplaints/>
        </ComplaintProvider>
       
    );
};

export default index;