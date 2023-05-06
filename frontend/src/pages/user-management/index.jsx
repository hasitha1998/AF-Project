import React from "react";
import ManageUsers from "./ManageUsers";
import PendingAccounts from "./PendingAccounts";
import { CustomerProvider } from "../../contexts/CustomerContext";

const index = () => {
    return (
        <CustomerProvider>
            <ManageUsers />
            <PendingAccounts />
        </CustomerProvider>
    );
};

export default index;
