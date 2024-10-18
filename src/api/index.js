// const domain = "http://localhost:9999/api";
// const domain = "https://foodtrip-server.onrender.com/api";

import domain from "./domain";

// Authentication API calls
const AUTH_LOGIN = `${domain}/auth/login`;
const AUTH_REGISTER = `${domain}/auth/register`;
const AUTH_LOGOUT = `${domain}/auth/logout`;

export default {
  AUTH_LOGIN,
  AUTH_REGISTER,
  AUTH_LOGOUT,
};
