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
};
