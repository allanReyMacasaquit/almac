import { auth, db } from "$db";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

async function registerUser(form) {
  const { user: registeredUser } = await createUserWithEmailAndPassword(
    auth,
    form.email,
    form.password
  );

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

  const userDoc = doc(db, "users", registeredUser.uid);
  await setDoc(userDoc, user);
  return registeredUser;
}

function logoutUser() {
  return signOut(auth);
}

async function loginUser(form) {
  const { user } = await signInWithEmailAndPassword(auth, form.email, form.password);
  return user;
}
function authenticate(form, type) {
  return type === "login" ? loginUser(form) : registerUser(form);
}

export { logoutUser, authenticate };
