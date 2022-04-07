import { auth, firestore } from "../configurations/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { query, getDocs, collection, where, addDoc } from "firebase/firestore";

export const UserSignUp = async (email, password, firstName, lastName) => {
  try {
    const addUser = await createUserWithEmailAndPassword(auth, email, password);
    const user = addUser.user;
    console.log(user)
    const collectionQuery = query(
      collection(firestore, "users_table"),
      where("uid", "==", user.uid)
    );
    const docs = await getDocs(collectionQuery);
    if (docs.docs.length === 0) {
      await addDoc(collection(firestore, "users_table"), {
        id: user.uid,
        email: user.email,
        password,
        firstName,
        lastName,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
