import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
  const { auth, role } = useSelector((store) => store.auth);
  console.log(auth, role);
  if (auth) {
    if (role == "admin") {
      return children;
    } else if (role == "newsEditor") {
      return children;
    } else {
      return <Navigate to={"/unauthorized"} />;
    }
  }

  return <Navigate to={"/login"} />;
}

export default PrivateRoutes;
