import React, { useContext } from "react";
import { SignUpContext } from "../contexts/SignUpContext";
import { useHistory } from "react-router-dom";
import SignUpForm from "./forms/SignUpForm";

export default function SignUp() {
  const history = useHistory();

  const signUp = useContext(SignUpContext);

  const handleSignUp = async (firstName, lastName, email, password) => {
    try {
      signUp(email, password, firstName, lastName);
      history.push("/");
    } catch {
      alert(`Failed to log in`);
    }
  };

  return <SignUpForm signUpHandle={handleSignUp} />;
}
