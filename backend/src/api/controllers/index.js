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
} from "./Complaint.controller";

import {
	registerCustomer,
	loginCustomer,
	getOneCustomer,
	getAllCustomers,
	updateCustomer,
	deleteCustomer,
} from "./Customer.controller";

import {
	registerGovAuthority,
	loginGovAuthority,
	getAllGovAuthorities,
	getOneGovAuthority,
	updateGovAuthority,
	deleteGovAuthority,
} from "./GovAuthority.controller.js";

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

	// GovAuthority Controllers
	registerGovAuthority,
	loginGovAuthority,
	getAllGovAuthorities,
	getOneGovAuthority,
	updateGovAuthority,
	deleteGovAuthority,
};
