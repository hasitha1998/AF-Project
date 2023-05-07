const mongoose = require("mongoose");

const MaintenanceTeamSchema = new mongoose.Schema(
	{
		teamName: {
			type: String,
			required: true,
		},
		teamLeader: {
			type: String,
			required: true,
		},
		teamMembers: {
			type: Array,
			required: true,
		},
		teamStatus: {
			type: String,
			required: true,
			default: "NOT_ASSIGNED",
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("maintenanceTeam", MaintenanceTeamSchema);
