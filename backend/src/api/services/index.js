import {} from "./Sample.service";
import {
	insertComplaint,
	getAllComplaints,
	getOneComplaint,
	updateComplaint,
	deleteComplaint,
	changeComplaintStatus,
	searchComplaints,
} from "./Complaint.service";

import { insertAdmin, authenticateAdmin, getAllAdmins, getOneAdmin, updateAdmin, deleteAdmin } from "./Admin.service";

import {
	insertCustomer,
	authenticateCustomer,
	getAllCustomers,
	getOneCustomer,
	updateCustomer,
	deleteCustomer,
} from "./Customer.service";

import {
	insertGovAuthority,
	authenticateGovAuthority,
	getAllGovAuthorities,
	getOneGovAuthority,
	updateGovAuthority,
	deleteGovAuthority,
} from "./GovAuthority.service.js";

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

	// Customer Services
	insertCustomer,
	authenticateCustomer,
	getAllCustomers,
	getOneCustomer,
	updateCustomer,
	deleteCustomer,

	// GovAuthority Services
	insertGovAuthority,
	authenticateGovAuthority,
	getAllGovAuthorities,
	getOneGovAuthority,
	updateGovAuthority,
	deleteGovAuthority,
};
