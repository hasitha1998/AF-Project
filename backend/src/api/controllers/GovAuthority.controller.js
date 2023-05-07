import GovAuthorityService from "../services";
import logger from "../../util/logger";
import GovAuthorityModel from "../models/GovAuthority.model";

// GovAuthority Register
export const registerGovAuthority = async (request, response, next) => {
	if (await GovAuthorityModel.findOne({ email: request.body.email })) {
		request.handleResponse.errorRespond(response)("Email already exists");
		next();
	} else {
		const GovAuthority = {
			name: request.body.name,
			email: request.body.email,
			description: request.body.description,
			password: request.body.password,
			permissionLevel: "GOV_AUTHORITY",
		};

		await GovAuthorityService.insertGovAuthority(GovAuthority)
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

// GovAuthority Login
export const loginGovAuthority = async (request, response, next) => {
	const { email, password } = request.body;

	if (email && password) {
		await GovAuthorityService.authenticateGovAuthority(email, password)
			.then(async (govAuthority) => {
				const authToken = await govAuthority.generateAuthToken();
				const data = {
					_id: govAuthority._id,
					name: govAuthority.name,
					email: govAuthority.email,
					token: authToken,
					permissionLevel: govAuthority.permissionLevel,
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

// Get all govAuthorities

export const getAllGovAuthorities = async (request, response, next) => {
	await GovAuthorityService.getAllGovAuthorities("users")
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get one GovAuthority
export const getOneGovAuthority = async (request, response, next) => {
	await GovAuthorityService.getOneGovAuthority(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Update GovAuthority
export const updateGovAuthority = async (request, response, next) => {
	await GovAuthorityService.updateGovAuthority(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Delete one GovAuthority
export const deleteGovAuthority = async (request, response, next) => {
	await GovAuthorityService.deleteGovAuthority(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
