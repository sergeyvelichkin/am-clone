import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-cac06.cloudfunctions.net/api", // The api url
});

export default instance;

//https://us-central1-clone-cac06.cloudfunctions.net/api

//http://localhost:5001/clone-cac06/us-central1/api
