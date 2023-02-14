import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children}) => {
  let jwt = localStorage.getItem("jwt");
  if(!jwt) {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default ProtectedRoute;
