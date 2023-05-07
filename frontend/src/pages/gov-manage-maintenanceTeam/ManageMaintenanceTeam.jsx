import MaintenanceTeamAPI from "../../contexts/api/MaintenanceTeamAPI";
import { useQuery } from "@tanstack/react-query";
import makeToast from "../../components/toast";
import { useContext, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit, AiFillEye } from "react-icons/ai";
import AddTeamModal from "./AddTeamModal";
import ViewTeamModal from "./ViewTeamModal";
import EditTeamModal from "./EditTeamModal";

import MaintenanceTeamContext from "../../contexts/MaintenanceTeamContext";

const ManageMaintenanceTeam = () => {
  const {
    teamsLoading,
    refetchTeams,
    teams,
    selectedTeam,
    setSelectedTeam,
    openEditTeamModal,
  } = useContext(MaintenanceTeamContext);

  // Add maintenance team modal state
  let [isAddTeamModalOpen, setIsAddTeamModalOpen] = useState(false);
  function closeAddTeamModal() {
    setIsAddTeamModalOpen(false);
    refetchTeams();
  }
  function openAddTeamModal() {
    setIsAddTeamModalOpen(true);
  }

  // View maintenance team modal state
  let [isViewTeamModalOpen, setIsViewTeamModalOpen] = useState(false);
  function closeViewTeamModal() {
    setIsViewTeamModalOpen(false);
  }
  function openViewTeamModal() {
    setIsViewTeamModalOpen(true);
  }

  // Delete maintenance team
  const deleteMaintenanceTeam = (id) => {
    MaintenanceTeamAPI.deleteMaintenanceTeam(id)
      .then((res) => {
        makeToast({ type: "success", message: "Team deleted successfully" });
        refetchTeams();
      })
      .catch((err) => {
        makeToast({ type: "error", message: err.response.data.message });
      });
  };

  // Change maintenance team status
  // const changeMaintenanceTeamStatus = (id, status) => {
  //   MaintenanceTeamAPI.updateMaintenanceTeamStatus(id, status)
  //     .then((res) => {
  //       makeToast({ type: "success", message: "Status changed successfully" });
  //       refetchTeams();
  //     })
  //     .catch((err) => {
  //       makeToast({ type: "error", message: err.response.data.message });
  //     });
  // };

  // Handle view team
  const handleViewTeam = (team) => {
    setSelectedTeam(team);
    openViewTeamModal();
  };

  // Handle edit team
  const handleEditTeam = (team) => {
    setSelectedTeam(team);
    openEditTeamModal();
  };

  return (
    <>
      <AddTeamModal
        isAddTeamModalOpen={isAddTeamModalOpen}
        closeAddTeamModal={closeAddTeamModal}
      />
      <ViewTeamModal
        isViewTeamModalOpen={isViewTeamModalOpen}
        closeViewTeamModal={closeViewTeamModal}
        selectedTeam={selectedTeam}
      />
      <EditTeamModal />
      <div className="flex flex-col mx-10 my-10">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl text-black">Manage Maintenance Teams</h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={openAddTeamModal}
          >
            Add Team
          </button>
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
                        Team Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Team Leader
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
                    {teamsLoading && (
                      <tr>
                        <td colSpan="4" className="text-center py-4">
                          Loading...
                        </td>
                      </tr>
                    )}
                    {teams &&
                      teams
                        .sort(
                          (a, b) =>
                            new Date(b.createdAt) - new Date(a.createdAt)
                        )
                        .map((team) => (
                          <tr className="hover:bg-gray-100" key={team._id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                              {team.teamName}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                              {team.teamLeader}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                              {team.teamStatus === "ASSIGNED" ? (
                                <button
                                  className="text-green-500 font-bold hover:text-green-700 border-2 border-green-500 rounded-full px-3 py-1"
                                  // onClick={() =>
                                  //   changeMaintenanceTeamStatus(
                                  //     team._id,
                                  //     "NOT_ASSIGNED"
                                  //   )
                                  // }
                                >
                                  ASSIGNED
                                </button>
                              ) : (
                                <button
                                  className="text-red-500 font-bold hover:text-red-700 border-2 border-red-500 rounded-full px-3 py-1"
                                  // onClick={() =>
                                  //   changeMaintenanceTeamStatus(
                                  //     team._id,
                                  //     "ASSIGNED"
                                  //   )
                                  // }
                                >
                                  NOT ASSIGNED
                                </button>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex gap-2 justify-end">
                              <button
                                className="text-gray-500 hover:text-green-700"
                                onClick={() => handleViewTeam(team)}
                              >
                                <AiFillEye className="text-4xl" />
                              </button>

                              <button
                                className="text-gray-500 hover:text-blue-700"
                                onClick={() => handleEditTeam(team)}
                              >
                                <AiOutlineEdit className="text-4xl" />
                              </button>

                              <button
                                className="text-red-500 hover:text-red-700"
                                onClick={() => deleteMaintenanceTeam(team._id)}
                              >
                                <MdDeleteOutline className="text-4xl" />
                              </button>
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

export default ManageMaintenanceTeam;
