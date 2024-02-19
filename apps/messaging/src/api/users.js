import { db } from "$db";
import { doc, getDoc } from "firebase/firestore";

async function getUser(uid) {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      //   console.log(userData);
      return userData;
    } else {
      console.log("User document does not exist");
      return null;
    }
  } catch (error) {
    console.error("Error getting user:", error);
    throw error; // Rethrow the error to propagate it to the caller
  }
}

export { getUser };
