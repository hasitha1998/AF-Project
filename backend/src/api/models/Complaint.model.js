const mongoose = require("mongoose");

const ComplaintSchema = new mongoose.Schema({
	// TODO: Add more fields

	complaintTitle: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	authority:{
		type:mongoose.Schema.Types.ObjectId,
		ref:"GovAuthority",
	},
	province: {
		type: String,
		required: true,
	},
	district: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	emergencyNo: {
		type: String,
		required: true,
	},
	image: {
		    type:String,
		    required:false
	},
    citizenId: {
		type:mongoose.Schema.Types.ObjectId,
		ref:"Customer",
	},
	
    complaintStatus: {
		type: String,
		required: true,
		default: "pending",
		enum: ["pending","approved", "assigned", "inProgress", "resolved", "invalid"],
	},
	isPublish: {
		type: Boolean,
		default: false,
	},
	assignedTeam: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "maintenanceTeam",
		default: null
	},
});

module.exports = mongoose.model("complaint", ComplaintSchema);

