import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import CustomerContext from "../../contexts/CustomerContext";

const PendingAccount = () => {
  const { customers } = useContext(CustomerContext);

  return (
    <div>
      <h1>Pending Accounts</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer._id}>
            <Link to={`/customer/${customer._id}`}>{customer.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PendingAccount;
