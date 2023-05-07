import ComplaintModel from "../models/Complaint.model";

// Insert one Complaint
export const insertComplaint = async (ComplaintData) => {
	return await ComplaintModel.create(ComplaintData)
		.then(async (complaint) => {
			await complaint.save();
			return complaint;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all Complaint
export const getAllComplaints = async () => {
	return await ComplaintModel.find({})
		// name and description of the authority
		.populate("authority", "name description")
		.populate("citizenId", "name nic")
		.populate("assignedTeam", "teamName")
		.then((complaints) => {
			return complaints;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one Complaint
export const getOneComplaint = async (complaintId) => {
	return await ComplaintModel.findById(complaintId)
		.then((complaint) => {
			if (complaint) {
				return complaint;
			} else {
				throw new Error("complaint not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update one Complaint
export const updateComplaint = async (complaintId, complaintData) => {
	return await ComplaintModel.findByIdAndUpdate(complaintId, complaintData, {
		new: true,
	})
		.then((complaint) => {
			if (complaint) {
				return complaint;
			} else {
				throw new Error("complaint not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete one Complaint
export const deleteComplaint = async (complaintId) => {
	return await ComplaintModel.findByIdAndDelete(complaintId)
		.then((complaint) => {
			if (complaint) {
				return complaint;
			} else {
				throw new Error("complaint not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

//change Complaint Status

export const changeComplaintStatus = async (complaintId, status) => {
	return await ComplaintModel.findByIdAndUpdate(complaintId, { complaintStatus: status })
		.then((complaint) => {
			if (complaint) {
				return complaint;
			} else {
				throw new Error("complaint not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Search Complaint titles or content
export const searchComplaints = async (searchTerm) => {
	return await ComplaintModel.find({
		$or: [{ title: { $regex: searchTerm, $options: "i" } }, { content: { $regex: searchTerm, $options: "i" } }],
	})
		.then((complaints) => {
			return complaints;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all Complaints by a specific user
export const getAllComplaintsByAuthority = async (authority) => {
	return await ComplaintModel.find({ authority: authority })
		.populate("assignedTeam", "teamName")
		.then((complaints) => {
			return complaints;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// assignedTeam
export const assignComplaintToMaintenanceTeam = async (complaintId, teamId) => {
	return await ComplaintModel.findByIdAndUpdate(complaintId, { assignedTeam: teamId })
		.then((complaint) => {
			if (complaint) {
				return complaint;
			} else {
				throw new Error("complaint not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
