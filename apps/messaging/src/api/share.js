import { db } from "$db";
import { Timestamp, addDoc, collection, doc } from "firebase/firestore";

async function createShareApi(shareData) {
  const userRef = doc(db, "users", shareData.uid);
  const share = {
    ...shareData,
    date: Timestamp.now(),
    user: userRef,
    likesCount: 0,
    subShareCount: 0
  };
  const shareCollection = collection(db, "shares");
  await addDoc(shareCollection, share);

  return share;
}
export { createShareApi };
