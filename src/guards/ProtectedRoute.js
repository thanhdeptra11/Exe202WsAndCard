// src/guards/ProtectedRoute.js

import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const storedUser = localStorage.getItem("user");

  // Redirect to login if the user is not logged in
  if (!isLoggedIn && !storedUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
