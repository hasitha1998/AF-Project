import CustomerModel from "../models/Customer.model";

// Customer Register
export const insertCustomer = async (customer) => {
	return await CustomerModel.create(customer)
		.then(async (customer) => {
			await customer.generateAuthToken();
			return customer;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Customer Login
export const authenticateCustomer = async (email, password) => {
	return await CustomerModel.findOne({ email })
		.then(async (customer) => {
			if (customer && (await customer.matchPassword(password))) {
				return customer;
			} else {
				throw new Error("Invalid Emaiil or Password");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all Customer
export const getAllCustomers = async () => {
	return await CustomerModel.find({})
		.then((customer) => {
			return customer;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one Admin
export const getOneCustomer = async (customerId) => {
	return await CustomerModel.findById(customerId)
		.then((customer) => {
			if (customer) {
				return customer;
			} else {
				throw new Error("Customer not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update one Customer
export const updateCustomer = async (customerId, customerData) => {
	return await CustomerModel.findByIdAndUpdate(customerId, customerData, {
		new: true,
	})
		.then((customer) => {
			if (customer) {
				return customer;
			} else {
				throw new Error("Customer Not Found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete one Customer
export const deleteCustomer = async (customerId) => {
	return await CustomerModel.findByIdAndDelete(customerId)
		.then((customer) => {
			if (customer) {
				return customer;
			} else {
				throw new Error("Customer Not Found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
