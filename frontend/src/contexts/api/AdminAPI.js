import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class AdminAPI {
  // Admin login
  static login(values) {
    return axios.post(`${BASE_URL}/api/admin/login`, values, requestConfigJson);
  }

  // Admin Register
  static register(values) {
    return axios.post(
      `${BASE_URL}/api/admin/register`,
      values,
      requestConfigJson
    );
  }

  // Get all Admins
  static getAdmins() {
    return axios.get(`${BASE_URL}/api/admin/`, requestConfig);
  }

  // Get one Admin
  static getOneAdmin(id) {
    return axios.get(`${BASE_URL}/api/admin/${id}`, requestConfigJson);
  }

  // Edit Admin
  static editAdmin(id, newAdmin) {
    return axios.put(
      `${BASE_URL}/api/admin/update/${id}`,
      newAdmin,
      requestConfigJson
    );
  }

  // Delete Admin
  static deleteAdmin(id) {
    return axios.delete(`${BASE_URL}/api/admin/delete/${id}`, requestConfig);
  }
}

export default AdminAPI;
