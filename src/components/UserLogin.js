import { auth } from "../configurations/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
export const UserLogin = async (email, password) => {
  try {
    const loggedUser = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("authToken", loggedUser.user.accessToken);
  } catch (error) {
    alert(error.message);
  }
};
