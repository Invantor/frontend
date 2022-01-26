import axios from "axios";

const baseAPI = axios.create({
  baseURL: "http://localhost:3000",
});

export default baseAPI;
