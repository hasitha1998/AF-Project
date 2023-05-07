import ManageMaintenanceTeam from "./ManageMaintenanceTeam";

import { MaintenanceTeamProvider } from "../../contexts/MaintenanceTeamContext";

const index = () => {
  return (
    <>
      <MaintenanceTeamProvider>
        <ManageMaintenanceTeam />
      </MaintenanceTeamProvider>
    </>
  );
};

export default index;
