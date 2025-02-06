// configure Axios to use the base URL from .env and ensure headers, if needed, are set for your API requests

import axios from "axios";

const axiosInstance = axios.create({
  //   baseURL: import.meta.REACT_APP_BASE_URL || "http://localhost:5001",
  baseURL: import.meta.env.VITE_BASE_URL,
  // baseURL: "http://localhost:5001",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
