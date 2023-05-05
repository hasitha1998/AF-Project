import AdminModel from "../models/Admin.model";

// Admin Register
export const insertAdmin = async (admin) => {
	return await AdminModel.create(admin)
		.then(async (admin) => {
			await admin.generateAuthToken();
			return admin;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Admin Login
export const authenticateAdmin = async (email, password) => {
	return await AdminModel.findOne({ email })
		.then(async (admin) => {
			if (admin && (await admin.matchPassword(password))) {
				return admin;
			} else {
				throw new Error("Invalid Emaiil or Password");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all Admins
export const getAllAdmins = async () => {
	return await AdminModel.find({})
		.then((admin) => {
			return admin;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one Admin
export const getOneAdmin = async (adminId) => {
	return await AdminModel.findById(adminId)
		.then((admin) => {
			if (admin) {
				return admin;
			} else {
				throw new Error("Admin not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update one Admin
export const updateAdmin = async (adminId, adminData) => {
	return await AdminModel.findByIdAndUpdate(adminId, adminData, {
		new: true,
	})
		.then((admin) => {
			if (admin) {
				return admin;
			} else {
				throw new Error("Admin Not Found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};


// Delete one Admin
export const deleteAdmin = async (adminId) => {
	return await AdminModel.findByIdAndDelete(adminId)
		.then((admin) => {
			if (admin) {
				return admin;
			} else {
				throw new Error("Admin Not Found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
