import React from "react";
import UnAuthorized from "./UnAuthorized";
import { useSelector } from "react-redux";

function NewsEditorAccess({ children }) {
  const { role } = useSelector((store) => {
    return store.auth;
  });

  if (role == "newsEditor" || role == "admin") {
    return <>{children}</>;
  } else {
    return <UnAuthorized />;
  }
}

export default NewsEditorAccess;
