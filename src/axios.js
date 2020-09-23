import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-cac06/us-central1/api", // The api url
});

export default instance;
