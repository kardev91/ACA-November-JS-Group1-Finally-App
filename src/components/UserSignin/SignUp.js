import React from "react";
import SignUpForm from "../Forms/SignUpForm";
import { UserSignUp } from "../../helper/UserSignUp";

export default function SignUp() {
  return <SignUpForm signUpHandle={UserSignUp} />;
}
