import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class MaintenanceTeamAPI {
  // MaintenanceTeam Create
  static createMaintenanceTeam(values) {
    return axios.post(`${BASE_URL}/api/team`, values, requestConfigJson);
  }

  // MaintenanceTeam Get All
  static getAllMaintenanceTeams() {
    return axios.get(`${BASE_URL}/api/team`, requestConfig);
  }

  // MaintenanceTeam Get One
  static getOneMaintenanceTeam(id) {
    return axios.get(`${BASE_URL}/api/team/${id}`, requestConfig);
  }

  // MaintenanceTeam Update
  static updateMaintenanceTeam(id, values) {
    return axios.patch(`${BASE_URL}/api/team/${id}`, values, requestConfigJson);
  }

  // MaintenanceTeam Update Status
  static updateMaintenanceTeamStatus(id, status) {
    const values = { teamStatus: status };
    return axios.patch(
      `${BASE_URL}/api/team/status/${id}`,
      values,
      requestConfigJson
    );
  }

  // MaintenanceTeam Delete
  static deleteMaintenanceTeam(id) {
    return axios.delete(`${BASE_URL}/api/team/${id}`, requestConfig);
  }
}

export default MaintenanceTeamAPI;
