import React from "react";
import SignUpForm from "./forms/SignUpForm";
import { UserSignUp } from "../helpers_functions/UserSignUp";

export default function SignUp() {
  return <SignUpForm signUpHandle={UserSignUp} />;
}
