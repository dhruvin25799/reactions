import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const RequiresAuth = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};
