import AdminService from "../services";
import logger from "../../util/logger";
import AdminModel from "../models/Admin.model";

// Admin Register
export const registerAdmin = async (request, response, next) => {
	if (await AdminModel.findOne({ email: request.body.email })) {
		request.handleResponse.errorRespond(response)("Email already exists");
		next();
	} else {
		const Admin = {
			name: request.body.name,
			email: request.body.email,
			password: request.body.password,
			permissionLevel: "ADMIN",
		};

		await AdminService.insertAdmin(Admin)
			.then((data) => {
				logger.info(`New User with ID ${data._id} created`);
				request.handleResponse.successRespond(response)(data);
				next();
			})
			.catch((error) => {
				logger.error(error.message);
				request.handleResponse.errorRespond(response)(error.message);
				next();
			});
	}
};

// Admin Login
export const loginAdmin = async (request, response, next) => {
	const { email, password } = request.body;

	if (email && password) {
		await AdminService.authenticateAdmin(email, password)
			.then(async (admin) => {
				const authToken = await admin.generateAuthToken();
				const data = {
					_id: admin._id,
					name: admin.name,
					email: admin.email,
					token: authToken,
					permissionLevel: admin.permissionLevel,
				};

				request.handleResponse.successRespond(response)(data);
			})
			.catch((error) => {
				const errorResponseData = {
					errorTime: new Date(),
					message: error.message,
				};

				logger.error(JSON.stringify(errorResponseData));
				request.handleResponse.errorRespond(response)(errorResponseData);
				next();
			});
	} else {
		logger.error("Username or Password is missing");
		request.handleResponse.errorRespond(response)("Username or Password is missing");
		next();
	}
};

// Get all admins

export const getAllAdmins = async (request, response, next) => {
	await AdminService.getAllAdmins("users")
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get one Admin
export const getOneAdmin = async (request, response, next) => {
	await AdminService.getOneAdmin(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Update Admin
export const updateAdmin = async (request, response, next) => {
	await AdminService.updateAdmin(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Delete one Admin
export const deleteAdmin = async (request, response, next) => {
	await AdminService.deleteAdmin(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
