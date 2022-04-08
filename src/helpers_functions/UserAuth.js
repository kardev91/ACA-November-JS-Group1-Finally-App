import { auth } from "../configurations/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const UserLogin = async (email, password) => {
  const loggedUser = await signInWithEmailAndPassword(auth, email, password);
  localStorage.setItem("authToken", loggedUser.user.accessToken);
};
