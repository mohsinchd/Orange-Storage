import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Spinner from "../../shared-components/Spinner/Spinner";

const ProtectedRoute = () => {
  const { isLoggedIn, checkingStatus } = useAuth();

  if (checkingStatus) {
    return <Spinner />;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;
