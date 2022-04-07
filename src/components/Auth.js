import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import AuthForm from "./forms/AuthForm";

export default function Auth() {
  const  login  = useContext(AuthContext)

  function handleLogin(email, password) {
    localStorage.getItem("authToken");
      login(email, password);
  }

  return <AuthForm loginHandle={handleLogin} />;
}
