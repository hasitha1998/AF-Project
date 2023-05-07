import axios from "axios";
import requestConfig from "./requestConfig";
// import requestConfigJson from "./requestConfigJson";

const BASE_URL = "https://jsonplaceholder.typicode.com";

class SampleAPI {
  // Get 5 posts
  static getAllPosts() {
    return axios.get(`${BASE_URL}/posts?_limit=5`, requestConfig);
  }
}

export default SampleAPI;
