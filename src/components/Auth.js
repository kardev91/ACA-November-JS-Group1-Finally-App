import React from "react";
import AuthForm from "./forms/AuthForm";
import { UserLogin } from "../helpers_functions/UserAuth";

export default function Auth() {

  return <AuthForm loginHandle={UserLogin} />;
}
