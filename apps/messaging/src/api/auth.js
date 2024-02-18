import { auth, db } from "$db";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const registerUser = async (form) => {
  try {
    // Create user in Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
    const registeredUser = userCredential.user;
    window.location.reload();
    // Redirect to the login page
    window.location.href = "/";

    // Additional user data
    const user = {
      uid: registeredUser.uid,
      fullName: form.fullName,
      username: form.username,
      email: form.email,
      avatar: form.avatar,
      followers: [],
      following: [],
      followersCount: 0,
      followingCount: 0
    };

    // Create user document in Firestore
    const userDocRef = doc(db, "users", registeredUser.uid);
    await setDoc(userDocRef, user);

    // Return the registered user
    return registeredUser;
  } catch (error) {
    console.error("Error registering user:", error.message);
    throw error;
  }
};

function logout() {
  signOut(auth)
    .then(() => {
      // Reload the page after logging out
      window.location.reload();
      // Redirect to the login page
      window.location.href = "/login";
      console.log("User logged out");
    })
    .catch((error) => {
      // Handle logout error
      console.error("Error logging out:", error);
    });
}
export { registerUser, logout };
