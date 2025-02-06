// file to centralize your API configurations

// src/api/apiConfig.js
// const API_BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:4001"; // Fallback URL for local dev
const API_BASE_URL = "http://localhost:4001"; // Fallback URL for local dev
// const BUS_API = process.env.REACT_APP_BUS_API || "/bus"; // Fallback for bus API route

// export const API_ROUTES = {
//   BUS: `${API_BASE_URL}${BUS_API}`,
// };

const API_ENDPOINTS = {
  //   AUTH: {
  //     LOGIN: "/auth/login",
  //     REGISTER: "/auth/register",
  //     LOGOUT: "auth/logout",
  //   },
  //   BOOKING: {
  //     CREATE: "/booking",
  //     GET_USER_BOOKINGS: "/booking/user",
  //     CANCEL: "/booking/cancel",
  //   },
  BUS: {
    GET_ALL: "/bus",
    // GET_BY_ID: (id) => `/bus/${id}`,
    // CREATE: "/bus",
    // UPDATE: (id) => `/bus/${id}`,
    // DELETE: (id) => `/bus/${id}`,
  },
};

export { API_BASE_URL, API_ENDPOINTS };
