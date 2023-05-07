import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

// const BASE_URL = "http://localhost:5000";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class ComplaintAPI {
  // Get all Complaints
  static getComplaints() {
    return axios.get(`${BASE_URL}/api/complaint/`, requestConfig);
  }

  // Add a Complaint
  static createComplaint(newComplaint) {
    return axios.post(
      `${BASE_URL}/api/complaint/`,
      newComplaint,
      requestConfigJson
    );
  }

  //Get one Complaint

  static getOneComplaint(id) {
    return axios.get(`${BASE_URL}/api/complaint/${id}`, requestConfigJson);
  }

  //Edit Complaint

  static editComplaint(id, newComplaint) {
    return axios.put(
      `${BASE_URL}/api/complaint/${id}`,
      newComplaint,
      requestConfigJson
    );
  }

  //Delete Complaint

  static deleteComplaint(id) {
    return axios.delete(`${BASE_URL}/api/complaint/${id}`, requestConfig);
  }

  // changeComplaintStatus
  static async changeComplaintStatus(id, status) {
    const response = await axios.patch(
      `${BASE_URL}/api/complaint/status/${id}`,
      { complaintStatus: status },
      requestConfigJson
    );
    return response.data;
  }

  // getAllComplaintsByAuthority
  static async getAllComplaintsByAuthority(id) {
    const response = await axios.get(
      `${BASE_URL}/api/complaint/authority/${id}`,
      requestConfig
    );
    return response.data;
  }

  // assignComplaintToMaintenanceTeam
  static async assignComplaintToMaintenanceTeam(id, maintenanceTeam) {
    const response = await axios.patch(
      `${BASE_URL}/api/complaint/assign/${id}`,
      { maintenanceTeam },
      requestConfigJson
    );
    return response.data;
  }
}

export default ComplaintAPI;
