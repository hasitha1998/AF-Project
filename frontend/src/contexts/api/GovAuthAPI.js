import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class GovAuthAPI {
  // GovAuth login
  static login(values) {
    return axios.post(`${BASE_URL}/api/gov/login`, values, requestConfigJson);
  }

  // GovAuth register
  static register(values) {
    return axios.post(
      `${BASE_URL}/api/gov/register`,
      values,
      requestConfigJson
    );
  }

  // Get all GovAuths
  static getGovAuths() {
    return axios.get(`${BASE_URL}/api/gov/`, requestConfig);
  }

  // Get one GovAuth
  static getOneGovAuth(id) {
    return axios.get(`${BASE_URL}/api/gov/${id}`, requestConfigJson);
  }

  // Edit GovAuth
  static editGovAuth(id, newGovAuth) {
    return axios.put(
      `${BASE_URL}/api/gov/${id}`,
      newGovAuth,
      requestConfigJson
    );
  }

  // Delete GovAuth
  static deleteGovAuth(id) {
    return axios.delete(`${BASE_URL}/api/gov/${id}`, requestConfig);
  }
}

export default GovAuthAPI;
