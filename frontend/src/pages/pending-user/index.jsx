import React from "react";

import PendingAccounts from "./PendingAccounts";
import { CustomerProvider } from "../../contexts/CustomerContext";

const index = () => {
    return (
        <CustomerProvider>
            
            <PendingAccounts />
        </CustomerProvider>
    );
};

export default index;
