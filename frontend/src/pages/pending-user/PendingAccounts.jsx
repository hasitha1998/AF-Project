import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CustomerContext from "../../contexts/CustomerContext";
import CustomerAPI from "../../contexts/api/CustomerAPI";
import makeToast from "../../components/toast";
import { FaUser } from 'react-icons/fa';

const status="active"

// Change account status
const changeAccountStatus = async (customerId , status) => {
  try {
    const { data } = await CustomerAPI.changeAccountStatus(customerId, status);
    makeToast({ type: "success", message: "Account status updated successfully" });
  } catch (error) {
    console.log(error);
   makeToast({ type: "error", message: "Something went wrong" });
  }
  };


const PendingAccount = () => {
  const { customers } = useContext(CustomerContext);

  return (
    <div className="p-3">
      <h1 className="text-xl font-bold mb-4">Pending Accounts</h1>
      <div className="bg-white shadow-md rounded my-6">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-center">Customer Name</th>
              <th className="py-3 px-6 text-center">NIC</th>
              
              
              <th className="py-3 px-6 text-center">front image</th>
              <th className="py-3 px-6 text-center">back image</th>
              <th className="py-3 px-6 text-center">Account Status</th>
              <th className="py-3 px-6 text-center">change status</th>
              
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
          
            {customers
            .filter((elem) => elem.accountStatus === "pending")
            .map((customer) => (
              <tr
                key={customer._id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
<td className="py-3 px-6 text-left whitespace-nowrap">
  <FaUser className="inline-block mr-2 text-gray-500" />
  <Link to={`/customer/${customer._id}`}>{customer.name}</Link>
</td>                
                <td className="py-3 px-6 text-center">{customer.nic}</td>
                <td>
                  <div className="relative">
											<img
												className="h-36 w-36 rounded-lg object-cover object-center"
												src={customer.imageFront}
												alt=""
											/>
                      
										</div>
                  </td>
                  <td>
                  <div className="relative">
											
                      <img
												className="h-36 w-36 rounded-lg object-cover object-center"
												src={customer.imageBack}
												alt=""
											/>
										</div>

                  </td>
                  <td className="py-3 px-6 text-center">{customer.accountStatus}</td>
                <td>
                  <button
                    className=" bg-green-500 text-white py-2 px-2 ml-[5rem] rounded-md hover:bg-green-600 transition-colors"
                    onClick={() => changeAccountStatus(customer._id,status)}
                  >
                    Change Status
                  </button></td>

                 
              </tr>
            ))}
          </tbody>
        </table>

       
      </div>
    </div>
  );
};

export default PendingAccount;
