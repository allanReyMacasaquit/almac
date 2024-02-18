import { auth } from "$db";
import { createUserWithEmailAndPassword } from "firebase/auth";

const registerUser = async (form) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
    const user = userCredential.user;

    return user;
  } catch (error) {
    console.error("Error registering user:", error.message);
    throw error;
  }
};

export { registerUser };
