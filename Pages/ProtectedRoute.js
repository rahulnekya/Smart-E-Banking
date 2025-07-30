// src/Pages/ProtectedRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token"); // ✅ check if user is logged in

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
