import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class AdminAPI {

    // Admin login
    static login(values) {
        return axios.post(`${BASE_URL}/api/admin/login`, values, requestConfigJson);
    }


}

export default AdminAPI;