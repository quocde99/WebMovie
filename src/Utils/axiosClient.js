import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://movie0706.cybersoft.edu.vn/api/",
});

export const setToken = (token) => {
  axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  //console.log(axiosClient.defaults.headers.common.Authorization);
};

axiosClient.interceptors.request.use((config) => {
  if (localStorage.getItem("credentials")) {
    const userInfo = JSON.parse(localStorage.getItem("credentials"));
    config.headers.Authorization = `Bearer ${userInfo.accessToken}`;
  }

  return config;
});

export default axiosClient;

// Authorization: "Bearer token"
