import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CustomerContext from "../../contexts/CustomerContext";

const PendingAccount = () => {
  const { customers } = useContext(CustomerContext);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Pending Accounts</h1>
      <div className="bg-white shadow-md rounded my-6">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Customer Name</th>
              <th className="py-3 px-6 text-left">Account Status</th>
              <th className="py-3 px-6 text-center">NIC</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {customers.map((customer) => (
              <tr
                key={customer._id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <Link to={`/customer/${customer._id}`}>{customer.name}</Link>
                </td>
                <td className="py-3 px-6 text-left">{customer.accountStatus}</td>
                <td className="py-3 px-6 text-center">{customer.nic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingAccount;
