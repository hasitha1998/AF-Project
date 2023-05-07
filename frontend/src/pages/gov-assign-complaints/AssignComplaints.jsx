import { useState } from "react";
import ComplaintAPI from "../../contexts/api/ComplaintAPI";
import { useQuery } from "@tanstack/react-query";
import MaintenanceTeamAPI from "../../contexts/api/MaintenanceTeamAPI";

const AssignComplaints = () => {
  const authorityId = localStorage.getItem("uId");
  const [complaints, setComplaints] = useState([]);
  const [maintenanceTeams, setMaintenanceTeams] = useState([]);

  // Get all complaints by authority
  const {
    isLoading: isLoadingComplaints,
    refetch: refetchComplaints,
    error: errorComplaints,
  } = useQuery(
    ["complaints", authorityId],
    () => ComplaintAPI.getAllComplaintsByAuthority(authorityId),
    {
      onSuccess: (data) => {
        setComplaints(data);
      },
    }
  );

  // Get all maintenance teams
  const {
    isLoading: isLoadingMaintenanceTeams,
    refetch: refetchMaintenanceTeams,
    error: errorMaintenanceTeams,
  } = useQuery(
    ["maintenanceTeams"],
    () => MaintenanceTeamAPI.getAllMaintenanceTeams(),
    {
      onSuccess: (res) => {
        setMaintenanceTeams(res.data);
      },
    }
  );

  // Assign complaint to maintenance team
  const handleAssignComplaint = async (complaintId, maintenanceTeamId) => {
    await ComplaintAPI.assignComplaintToMaintenanceTeam(
      complaintId,
      maintenanceTeamId
    );
    await MaintenanceTeamAPI.updateMaintenanceTeamStatus(
      maintenanceTeamId,
      "ASSIGNED"
    );
    await ComplaintAPI.changeComplaintStatus(complaintId, "assigned");
    refetchComplaints();
  };

  return (
    <div className="flex flex-col mx-10 my-10">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl text-black">Assign Complaints</h1>
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
                    {/* Assigned Maintenance Team */}
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Assigned Team
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
                  {errorComplaints && (
                    <tr>
                      <td colSpan="4" className="text-center py-4">
                        Something went wrong!
                      </td>
                    </tr>
                  )}

                  {isLoadingComplaints && (
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

                          {/* Assigned Maintenance Team */}
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                            {complain.assignedTeam?.teamName}
                          </td>

                          {/* Assign complaint to maintenance team */}
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <select
                              className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                              onChange={(e) =>
                                handleAssignComplaint(
                                  complain._id,
                                  e.target.value
                                )
                              }
                              value={complain.assignedTeam?.teamName}
                            >
                              <option value="">Assign Team</option>
                              {maintenanceTeams &&
                                maintenanceTeams.map((team) => (
                                  <option value={team._id} key={team._id}>
                                    {team.teamName}
                                  </option>
                                ))}
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
  );
};

export default AssignComplaints;
