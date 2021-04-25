import axios from "axios";

const axiosClient = axios.create({
  baseURL:
    process.env.REACT_APP_LINK_API ||
    "https://cyb06ylby6.execute-api.ap-southeast-1.amazonaws.com/v1",
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("authentication");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem("authentication");
      window.location = ("/auth/login" as unknown) as Location;
    }
    throw error;
  }
);

export default axiosClient;
