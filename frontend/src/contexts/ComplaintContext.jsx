/* eslint-disable no-console */
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ComplaintAPI from "./api/ComplaintAPI";
import makeToast from "../components/toast";

const BASE_URL = "http://localhost:5003/api/complaint";

const ComplaintContext = createContext();

export function ComplaintProvider({ children }) {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [complaints, setComplaints] = useState([]);

	// Complaints
	const [complaint, setComplaint] = useState({

       complaintTitle:"",
       description:"",
	   authority:"",
       province:"",
       district:"",
       location:"",
       emergencyNo:"",
       image:"",
       citizenId:"",
       citizenName:"",
       citizenNIC:"",
       complaintStatus:"",
	});

	useEffect(() => {
		setIsLoading(true);
		ComplaintAPI.getComplaints().then((response) => {
			setComplaints(response.data);
		//console.log(products.values("productName"));
			setIsLoading(false);
		});
	}, []);

	// Add Complaint
	const addComplaint = async (newComplaint) => {
		// eslint-disable-next-line no-console
		//console.log("package context :" + newComplaint.productImage);

		try {
			setIsLoading(true);
			const response = await ComplaintAPI.createComplaint(newComplaint);
			setComplaints([...complaints, response.data]);
			setIsLoading(false);
			alert("Data added successfully...");
			//navigate("/camping-vendor-dashboard");
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	//get One Complaint

	const getComplaint = (id) => {
		useEffect(() => {
			ComplaintAPI.getOneComplaint(id).then((res) => {
				setComplaint(res.data);
			});
		}, []);
	};

	// Edit Complaint
	const editComplaint = (values) => {
		const newComplaint = {
			
            complaintTitle:values.complaintTitle,
            description:values.description,
			authority:values.authority,
            province:values.province,
            district:values.district,
            location:values.location,
            emergencyNo:values.emergencyNo,
            image:values.image,
            citizenId:values.citizenId,
            citizenName:values.citizenName,
            citizenNIC:values.citizenNIC,
            complaintStatus:values.complaintStatus,
			isPublished:values.isPublished,
			assignedTeam:values.assignedTeam
		};
		ComplaintAPI.editComplaint(values.id, newComplaint)
			.then((response) => {
				//console.log(res.data);
				//navigate("/viewres");
				// eslint-disable-next-line no-console
				console.log("updated successfully...");
				//navigate("/camping-vendor-dashboard");
			})
			.catch((err) => {
				// eslint-disable-next-line no-console
				console.log(err);
			});
	};

	// Change complaint status
	const changeComplaintStatus = async (complaintId , status) => {
		try {
		  const { data } = await ComplaintAPI.changeComplaintStatus(complaintId, status);
		  makeToast({ type: "success", message: "Complaint status updated successfully" });
		} catch (error) {
		  console.log(error);
		  makeToast({ type: "error", message: "Something went wrong" });
		}
	  };

	// Delete Complaint

	const deleteComplaint = (id) => {
		ComplaintAPI.deleteComplaint(id).then(() => {
			setComplaints(complaints.filter((comp) => comp._id !== id));
			makeToast({ type: "success", message: "Complaint Deleted successfully" });
		});
	};

	return (
		<ComplaintContext.Provider
			value={{
				isLoading,
				complaints,
				addComplaint,
				getComplaint,
				editComplaint,
				deleteComplaint,
				setComplaint,
				complaint,
				
			}}
		>
			{children}
		</ComplaintContext.Provider>
	);
}

export default ComplaintContext;
