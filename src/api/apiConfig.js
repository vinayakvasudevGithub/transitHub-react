// file to centralize your API configurations

// src/api/apiConfig.js
const API_BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:4001"; // Fallback URL for local dev
const BUS_API = process.env.REACT_APP_BUS_API || "/bus"; // Fallback for bus API route

export const API_ROUTES = {
  BUS: `${API_BASE_URL}${BUS_API}`,
};
