import React from "react";
import AuthForm from "../Forms/AuthForm";
import { UserLogin } from "../../helper/UserAuth";

export default function Auth() {
  return <AuthForm loginHandle={UserLogin} />;
}
