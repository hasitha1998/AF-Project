import { createContext, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import MaintenanceTeamAPI from "./api/MaintenanceTeamAPI";
import makeToast from "../components/toast";
import { useForm } from "react-hook-form";

const MaintenanceTeamContext = createContext();

export const MaintenanceTeamProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState({});

  // Get all maintenance teams ------------------------------------------------
  const { isLoading: teamsLoading, refetch: refetchTeams } = useQuery({
    queryKey: ["team"],
    queryFn: MaintenanceTeamAPI.getAllMaintenanceTeams,
    onSuccess: (res) => {
      setTeams(res.data);
    },
  });
  // --------------------------------------------------------------------------

  // Edit maintenance team form -----------------------------------------------
  const {
    reset: resetEditTeamForm,
    register: registerEditTeamForm,
    handleSubmit: handleSubmitEditTeamForm,
    formState: { errors: errorsEditTeamForm },
  } = useForm();

  // Edit maintenance team modal state
  let [isEditTeamModalOpen, setIsEditTeamModalOpen] = useState(false);
  function closeEditTeamModal() {
    setSelectedTeam({});
    setIsEditTeamModalOpen(false);
  }
  function openEditTeamModal() {
    resetEditTeamForm();
    setIsEditTeamModalOpen(true);
  }

  // React Query Mutation
  const editTeamMutation = useMutation({
    mutationFn: (team) =>
      MaintenanceTeamAPI.updateMaintenanceTeam(selectedTeam._id, team),
    onSuccess: (res) => {
      makeToast({ type: "success", message: "Team updated successfully" });
      closeEditTeamModal();
      refetchTeams();
    },
    onError: (err) => {
      makeToast({ type: "error", message: err.response.data.message });
    },
  });

  // Edit maintenance team form submit handler
  const editTeam = (data) => {
    // contruct team object
    const team = {
      teamName: data.teamName,
      teamLeader: data.teamLeader,
      teamMembers: data.teamMembers.split(",").map((member) => member.trim()),
    };
    editTeamMutation.mutate(team);
  };
  // --------------------------------------------------------------------------

  return (
    <MaintenanceTeamContext.Provider
      value={{
        resetEditTeamForm,
        registerEditTeamForm,
        handleSubmitEditTeamForm,
        errorsEditTeamForm,
        editTeam,
        isEditTeamModalOpen,
        closeEditTeamModal,
        openEditTeamModal,
        selectedTeam,
        setSelectedTeam,
        teams,
        teamsLoading,
        refetchTeams,
      }}
    >
      {children}
    </MaintenanceTeamContext.Provider>
  );
};

export default MaintenanceTeamContext;
