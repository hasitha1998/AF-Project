import { useState } from "react";
import ComplaintAPI from "../../contexts/api/ComplaintAPI";
import { useQuery } from "@tanstack/react-query";

const ManageComplaints = () => {
  const authorityId = localStorage.getItem("uId");
  const [complaints, setComplaints] = useState([]);

  const { isLoading, refetch, error } = useQuery(
    ["complaints", authorityId],
    () => ComplaintAPI.getAllComplaintsByAuthority(authorityId),
    {
      onSuccess: (data) => {
        setComplaints(data);
      },
    }
  );

  return (
    <div className="flex flex-col mx-10 my-10">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl text-black">Manage Complaints</h1>
      </div>

      <div className="flex flex-col mt-10">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Status
                    </th>
                    {/* <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                    >
                      Action
                    </th> */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {error && (
                    <tr>
                      <td colSpan="4" className="text-center py-4">
                        Something went wrong!
                      </td>
                    </tr>
                  )}

                  {isLoading && (
                    <tr>
                      <td colSpan="4" className="text-center py-4">
                        Loading...
                      </td>
                    </tr>
                  )}
                  {complaints &&
                    complaints
                      // filter for remove invalid complaints
                      .filter(
                        (complain) => complain.complaintStatus !== "invalid"
                      )
                      .map((complain) => (
                        <tr className="hover:bg-gray-100" key={complain._id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                            {complain.complaintTitle}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                            {complain.description}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                            {complain.complaintStatus}
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageComplaints;
