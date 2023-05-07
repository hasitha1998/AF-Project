import { useState } from "react";
import ComplaintAPI from "../../contexts/api/ComplaintAPI";
import { useQuery } from "@tanstack/react-query";
import MaintenanceTeamAPI from "../../contexts/api/MaintenanceTeamAPI";
import { AiFillEye } from "react-icons/ai";
import ViewComplaintModal from "./ViewComplaintModal";

const ManageComplaints = () => {
  const authorityId = localStorage.getItem("uId");
  const [complaints, setComplaints] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState({});

  // View complaint modal state
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const { isLoading, refetch, error } = useQuery(
    ["complaints", authorityId],
    () => ComplaintAPI.getAllComplaintsByAuthority(authorityId),
    {
      onSuccess: (data) => {
        setComplaints(data);
      },
    }
  );

  const handleComplaintStatusChange = async (complaintId, status) => {
    await ComplaintAPI.changeComplaintStatus(complaintId, status);

    if (status !== "assigned") {
      await MaintenanceTeamAPI.updateMaintenanceTeamStatus(
        complaints.find((complaint) => complaint._id === complaintId)
          .assignedTeam._id,
        "NOT_ASSIGNED"
      );

      // Remove assigned team from complaint
      await ComplaintAPI.assignComplaintToMaintenanceTeam(complaintId, null);
    }

    refetch();
    console.log("Complaint status changed");
  };

  const handleComplaintView = (complaint) => {
    setSelectedComplaint(complaint);
    openModal();
  };

  return (
    <>
      <ViewComplaintModal
        isOpen={isOpen}
        closeModal={closeModal}
        complaint={selectedComplaint}
      />
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

                      {/* citizenId.name */}
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Citizen Name
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Description
                      </th>
                      {/* district */}
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        District
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                      >
                        Action
                      </th>
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

                            {/* citizenId.name */}
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                              {complain.citizenId?.name}
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                              {complain.description}
                            </td>

                            {/* district */}
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                              {complain.district}
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                              {complain.complaintStatus}
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex flex-row justify-end gap-2">
                              {/* View Complaint */}
                              <button
                                className="text-gray-500 hover:text-green-500"
                                onClick={() => handleComplaintView(complain)}
                              >
                                <AiFillEye className="text-3xl" />
                              </button>

                              <select
                                className="px-3 py-2 border-2 border-gray-300 rounded-md"
                                onChange={(e) =>
                                  handleComplaintStatusChange(
                                    complain._id,
                                    e.target.value
                                  )
                                }
                                // value={complain.complaintStatus}
                              >
                                <option value="">Change Status</option>
                                <option value="inProgress">In Progress</option>
                                <option value="resolved">Resolved</option>
                                <option value="invalid">Invalid</option>
                              </select>
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
    </>
  );
};

export default ManageComplaints;
