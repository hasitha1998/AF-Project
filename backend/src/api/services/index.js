import {} from "./Sample.service";

import { insertAdmin, authenticateAdmin, getAllAdmins, getOneAdmin, updateAdmin, deleteAdmin } from "./Admin.service";

export default {
	// Sample services
	insertAdmin,
	authenticateAdmin,
	getAllAdmins,
	getOneAdmin,
	updateAdmin,
	deleteAdmin,
};
