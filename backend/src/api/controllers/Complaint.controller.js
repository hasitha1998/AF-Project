import ComplaintService from "../services";

// Insert one Complaint
export const insertComplaint = async (request, response, next) => {

   const{complaintTitle,description,authority,province,district,location,emergencyNo,image,citizenId,complaintStatus,isPublish,assignedTeam}=request.body;
    await ComplaintService.insertComplaint(
       {
       complaintTitle,
       description,
       authority,
       province,
       district,
       location,
       emergencyNo,
       image,
       citizenId,
       complaintStatus,
       isPublish,
       assignedTeam
    })
        .then((data) => {
            request.handleResponse.successRespond(response)(data);
            next();
        })
        .catch((error) => {
            request.handleResponse.errorRespond(response)(error.message);
            next();
        });
};

// Get all Complaints
export const getAllComplaints = async (request, response, next) => {
    await ComplaintService.getAllComplaints("complaints")
        .then(async (data) => {
            request.handleResponse.successRespond(response)(data);
            next();
        })
        .catch((error) => {
            request.handleResponse.errorRespond(response)(error.message);
            next();
        });
};

// Get one Complaint
export const getOneComplaint = async (request, response, next) => {
    await ComplaintService.getOneComplaint(request.params.id)
        .then((data) => {
            request.handleResponse.successRespond(response)(data);
            next();
        })
        .catch((error) => {
            request.handleResponse.errorRespond(response)(error.message);
            next();
        });
};

// Update one Complaint
export const updateComplaint = async (request, response, next) => {
    await ComplaintService.updateComplaint(request.params.id, request.body)
        .then((data) => {
            request.handleResponse.successRespond(response)(data);
            next();
        })
        .catch((error) => {
            request.handleResponse.errorRespond(response)(error.message);
            next();
        });
};

// Delete one Complaint
export const deleteComplaint = async (request, response, next) => {
    await ComplaintService.deleteComplaint(request.params.id)
        .then((data) => {
            request.handleResponse.successRespond(response)(data);
            next();
        })
        .catch((error) => {
            request.handleResponse.errorRespond(response)(error.message);
            next();
        });
};

//change Complaint Status

export const changeComplaintStatus = async (request, response, next) => {
	await ComplaintService.changeComplaintStatus(request.params.id, request.body.complaintStatus)
		.then(async()=>{
            request.handleResponse.successRespond(response)({ message: "Order status changed successfully" });
			next();
        })
        .catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Search Complaint
export const searchComplaints = async (request, response, next) => {
    await ComplaintService.searchComplaints(request.params.search)
        .then((data) => {
            request.handleResponse.successRespond(response)(data);
            next();
        })
        .catch((error) => {
            request.handleResponse.errorRespond(response)(error.message);
            next();
        });
};

// getAllComplaintsByAuthority
export const getAllComplaintsByAuthority = async (request, response, next) => {
    await ComplaintService.getAllComplaintsByAuthority(request.params.authorityId)
        .then(async (data) => {
            request.handleResponse.successRespond(response)(data);
            next();
        })
        .catch((error) => {
            request.handleResponse.errorRespond(response)(error.message);
            next();
        });
};

// assignComplaintToMaintenanceTeam
export const assignComplaintToMaintenanceTeam = async (request, response, next) => {
    await ComplaintService.assignComplaintToMaintenanceTeam(request.params.id, request.body.maintenanceTeam)
        .then(async () => {
            request.handleResponse.successRespond(response)({ message: "Complaint assigned to maintenance team successfully" });
            next();
        })
        .catch((error) => {
            request.handleResponse.errorRespond(response)(error.message);
            next();
        });
};