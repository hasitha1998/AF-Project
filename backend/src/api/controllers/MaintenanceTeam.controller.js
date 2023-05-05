import MaintenanceTeamService from "../services";

// Insert one MaintenanceTeam
export const insertMaintenanceTeam = async (request, response, next) => {
	const { teamName, teamLeader, teamMembers, teamStatus } = request.body;
	await MaintenanceTeamService.insertMaintenanceTeam({ teamName, teamLeader, teamMembers, teamStatus })
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get all MaintenanceTeams
export const getAllMaintenanceTeams = async (request, response, next) => {
	await MaintenanceTeamService.getAllMaintenanceTeams("maintenanceTeams")
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get one MaintenanceTeam
export const getOneMaintenanceTeam = async (request, response, next) => {
	await MaintenanceTeamService.getOneMaintenanceTeam(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Update one MaintenanceTeam
export const updateMaintenanceTeam = async (request, response, next) => {
	await MaintenanceTeamService.updateMaintenanceTeam(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Delete one MaintenanceTeam
export const deleteMaintenanceTeam = async (request, response, next) => {
	await MaintenanceTeamService.deleteMaintenanceTeam(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Change MaintenanceTeam status
export const changeMaintenanceTeamStatus = async (request, response, next) => {
	await MaintenanceTeamService.changeMaintenanceTeamStatus(request.params.id, request.body.teamStatus)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
