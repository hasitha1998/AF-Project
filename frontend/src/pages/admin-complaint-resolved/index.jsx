import React from "react";
import AdminComplaintResolved from "./AdminComplaintResolved";

import { ComplaintProvider } from "../../contexts/ComplaintContext";

const index = () => {

    return (
        <ComplaintProvider>
        <AdminComplaintResolved />
        </ComplaintProvider>
    );

};

export default index;