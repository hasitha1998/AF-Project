import {} from "./Sample.controller";

import { registerAdmin, loginAdmin, getAllAdmins, getOneAdmin, updateAdmin, deleteAdmin } from "./Admin.controller";

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
} from "./Complaint.controller";

import {
	registerCustomer,
	loginCustomer,
	getOneCustomer,
	getAllCustomers,
	updateCustomer,
	deleteCustomer,
	changeAccountStatus,
} from "./Customer.controller";

import {
	registerGovAuthority,
	loginGovAuthority,
	getAllGovAuthorities,
	getOneGovAuthority,
	updateGovAuthority,
	deleteGovAuthority,
} from "./GovAuthority.controller.js";

import {
	insertMaintenanceTeam,
	getAllMaintenanceTeams,
	getOneMaintenanceTeam,
	updateMaintenanceTeam,
	deleteMaintenanceTeam,
	changeMaintenanceTeamStatus,
} from "./MaintenanceTeam.controller";

export default {
	// Sample Controllers
	//Complaint Controllers
	insertComplaint,
	getAllComplaints,
	getOneComplaint,
	updateComplaint,
	deleteComplaint,
	changeComplaintStatus,
	searchComplaints,
	getAllComplaintsByAuthority,
	assignComplaintToMaintenanceTeam,

	// Admin Controllers
	registerAdmin,
	loginAdmin,
	getAllAdmins,
	getOneAdmin,
	updateAdmin,
	deleteAdmin,

	// Customer Controllers
	registerCustomer,
	loginCustomer,
	getOneCustomer,
	getAllCustomers,
	updateCustomer,
	deleteCustomer,
	changeAccountStatus,

	// GovAuthority Controllers
	registerGovAuthority,
	loginGovAuthority,
	getAllGovAuthorities,
	getOneGovAuthority,
	updateGovAuthority,
	deleteGovAuthority,

	// MaintenanceTeam Controllers
	insertMaintenanceTeam,
	getAllMaintenanceTeams,
	getOneMaintenanceTeam,
	updateMaintenanceTeam,
	deleteMaintenanceTeam,
	changeMaintenanceTeamStatus,
};
