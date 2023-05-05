import React from "react";
import CustomerLogin from "./CustomerLogin";
import { CustomerProvider } from "../../contexts/CustomerContext";

const index = () => {
    return (
        <CustomerProvider>
            <CustomerLogin />
        </CustomerProvider>
       
    );
};

export default index;