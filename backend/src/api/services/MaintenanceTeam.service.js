import MaintenanceTeamModel from "../models/MaintenanceTeam.model";

// Insert one MaintenanceTeam
export const insertMaintenanceTeam = async (MaintenanceTeamData) => {
	return await MaintenanceTeamModel.create(MaintenanceTeamData)
		.then(async (maintenanceTeam) => {
			await maintenanceTeam.save();
			return maintenanceTeam;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all MaintenanceTeam
export const getAllMaintenanceTeams = async () => {
	return await MaintenanceTeamModel.find({})
		.then((maintenanceTeams) => {
			return maintenanceTeams;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one MaintenanceTeam
export const getOneMaintenanceTeam = async (maintenanceTeamId) => {
	return await MaintenanceTeamModel.findById(maintenanceTeamId)
		.then((maintenanceTeam) => {
			if (maintenanceTeam) {
				return maintenanceTeam;
			} else {
				throw new Error("maintenanceTeam not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update one MaintenanceTeam
export const updateMaintenanceTeam = async (maintenanceTeamId, maintenanceTeamData) => {
	return await MaintenanceTeamModel.findByIdAndUpdate(maintenanceTeamId, maintenanceTeamData, {
		new: true,
	})
		.then((maintenanceTeam) => {
			if (maintenanceTeam) {
				return maintenanceTeam;
			} else {
				throw new Error("maintenanceTeam not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete one MaintenanceTeam
export const deleteMaintenanceTeam = async (maintenanceTeamId) => {
	return await MaintenanceTeamModel.findByIdAndDelete(maintenanceTeamId)
		.then((maintenanceTeam) => {
			if (maintenanceTeam) {
				return maintenanceTeam;
			} else {
				throw new Error("maintenanceTeam not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Change MaintenanceTeam status
export const changeMaintenanceTeamStatus = async (maintenanceTeamId, status) => {
	return await MaintenanceTeamModel.findByIdAndUpdate(maintenanceTeamId, { teamStatus: status }, { new: true })
		.then((maintenanceTeam) => {
			if (maintenanceTeam) {
				return maintenanceTeam;
			} else {
				throw new Error("maintenanceTeam not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
