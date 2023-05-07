import React from "react";
import AdminComplaintResolved from "./AdminComplaintResolved";

import { ComplaintProvider } from "../../contexts/complaintContext";

const index = () => {

    return (
        <ComplaintProvider>
        <AdminComplaintResolved />
        </ComplaintProvider>
    );

};

export default index;