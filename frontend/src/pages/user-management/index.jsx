import React from "react";
import ManageUsers from "./ManageUsers";
import PendingAccount from "./PendingAccounts";

const index = () => {
    return (
        <div>
            <ManageUsers />
            <PendingAccount />
        </div>
    );
};

export default index;