import {} from "./Sample.service";
import {
	insertComplaint,
	getAllComplaints,
	getOneComplaint,
	updateComplaint,
	deleteComplaint,
	changeComplaintStatus,
	searchComplaints,
	getAllComplaintsByAuthority,
	assignComplaintToMaintenanceTeam,
} from "./Complaint.service";

import { insertAdmin, authenticateAdmin, getAllAdmins, getOneAdmin, updateAdmin, deleteAdmin } from "./Admin.service";

import {
	insertCustomer,
	authenticateCustomer,
	getAllCustomers,
	getOneCustomer,
	updateCustomer,
	deleteCustomer,
	changeAccountStatus,
} from "./Customer.service";

import {
	insertGovAuthority,
	authenticateGovAuthority,
	getAllGovAuthorities,
	getOneGovAuthority,
	updateGovAuthority,
	deleteGovAuthority,
} from "./GovAuthority.service.js";

import {
	insertMaintenanceTeam,
	getAllMaintenanceTeams,
	getOneMaintenanceTeam,
	updateMaintenanceTeam,
	deleteMaintenanceTeam,
	changeMaintenanceTeamStatus,
} from "./MaintenanceTeam.service";

export default {
	// Sample services
	insertAdmin,
	authenticateAdmin,
	getAllAdmins,
	getOneAdmin,
	updateAdmin,
	deleteAdmin,

	//Complaint Services
	insertComplaint,
	getAllComplaints,
	getOneComplaint,
	updateComplaint,
	deleteComplaint,
	changeComplaintStatus,
	searchComplaints,
	getAllComplaintsByAuthority,
	assignComplaintToMaintenanceTeam,

	// Customer Services
	insertCustomer,
	authenticateCustomer,
	getAllCustomers,
	getOneCustomer,
	updateCustomer,
	deleteCustomer,
	changeAccountStatus,

	// GovAuthority Services
	insertGovAuthority,
	authenticateGovAuthority,
	getAllGovAuthorities,
	getOneGovAuthority,
	updateGovAuthority,
	deleteGovAuthority,

	// Maintenance Team Services
	insertMaintenanceTeam,
	getAllMaintenanceTeams,
	getOneMaintenanceTeam,
	updateMaintenanceTeam,
	deleteMaintenanceTeam,
	changeMaintenanceTeamStatus,
};
