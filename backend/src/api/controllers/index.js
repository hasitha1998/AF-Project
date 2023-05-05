import {} from "./Sample.controller";
import { registerAdmin, loginAdmin, getAllAdmins, getOneAdmin, updateAdmin, deleteAdmin } from "./Admin.controller";
	
import {
	insertComplaint,
	getAllComplaints,
	getOneComplaint,
	updateComplaint,
	deleteComplaint,
	changeComplaintStatus,
	searchComplaints
} from "./Complaint.controller";


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
};
