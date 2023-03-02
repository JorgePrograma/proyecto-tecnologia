import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://localhost:8000/api`
})

axiosClient.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axiosClient.defaults.withCredentials = true;

export default axiosClient
