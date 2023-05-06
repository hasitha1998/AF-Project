import React from "react";
import CustomerDashboard from "./CustomerDashboard";
import { CustomerProvider } from "../../contexts/CustomerContext";
const index = () => {
    return (
        <CustomerProvider>
            <CustomerDashboard />
        </CustomerProvider>
       
    );
};

export default index;