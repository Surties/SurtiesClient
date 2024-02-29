import React from "react";
import { useSelector } from "react-redux";
import UnAuthorized from "./UnAuthorized";

function AdminAccess({ children }) {
  const { role } = useSelector((store) => {
    return store.auth;
  });

  if (role == "admin") {
    return <>{children}</>;
  } else {
    return <UnAuthorized />;
  }
}

export default AdminAccess;
