import React from "react";
import ManageUsers from "../manage-users/ManageUsers";

import { CustomerProvider } from "../../contexts/CustomerContext";

const index = () => {
    return (
        <CustomerProvider>
            <ManageUsers />
            
        </CustomerProvider>
    );
};

export default index;