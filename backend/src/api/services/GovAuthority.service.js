import GovAuthorityModel from "../models/GovAuthority.model";

// GovAuthority Register
export const insertGovAuthority = async (govAuthority) => {
	return await GovAuthorityModel.create(govAuthority)
		.then(async (govAuthority) => {
			await govAuthority.generateAuthToken();
			return govAuthority;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// GovAuthority Login
export const authenticateGovAuthority = async (email, password) => {
	return await GovAuthorityModel.findOne({ email })
		.then(async (govAuthority) => {
			if (govAuthority && (await govAuthority.matchPassword(password))) {
				return govAuthority;
			} else {
				throw new Error("Invalid Emaiil or Password");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all GovAuthorities
export const getAllGovAuthorities = async () => {
	return await GovAuthorityModel.find({})
		.then((govAuthority) => {
			return govAuthority;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one GovAuthority
export const getOneGovAuthority = async (govAuthorityId) => {
	return await GovAuthorityModel.findById(govAuthorityId)
		.then((govAuthority) => {
			if (govAuthority) {
				return govAuthority;
			} else {
				throw new Error("GovAuthority not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update one GovAuthority
export const updateGovAuthority = async (govAuthorityId, govAuthorityData) => {
	return await GovAuthorityModel.findByIdAndUpdate(govAuthorityId, govAuthorityData, {
		new: true,
	})
		.then((govAuthority) => {
			if (govAuthority) {
				return govAuthority;
			} else {
				throw new Error("GovAuthority Not Found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete one GovAuthority
export const deleteGovAuthority = async (govAuthorityId) => {
	return await GovAuthorityModel.findByIdAndDelete(govAuthorityId)
		.then((govAuthority) => {
			if (govAuthority) {
				return govAuthority;
			} else {
				throw new Error("GovAuthority Not Found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
