// const domain = "http://localhost:9999/api";
// const domain = "https://foodtrip-server.onrender.com/api";

import domain from "./domain";

// Authentication API calls
const AUTH_LOGIN = `${domain}/auth/login`;
const AUTH_REGISTER = `${domain}/auth/register`;
const AUTH_LOGOUT = `${domain}/auth/logout`;

//Shop
const SHOP_GETALL = `${domain}/shop`;

//user
const USER_GETALL = `${domain}/auth/getAllUsers`;

export default {
  AUTH_LOGIN,
  AUTH_REGISTER,
  AUTH_LOGOUT,
  SHOP_GETALL,
  USER_GETALL,
};
