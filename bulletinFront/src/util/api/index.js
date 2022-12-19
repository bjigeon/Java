import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 1000,
});

api.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("igmyeong_token");
    if (accessToken) {
      config.headers = {
        Authorization: accessToken,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
