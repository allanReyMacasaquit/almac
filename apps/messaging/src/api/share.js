import { db } from "$db";
import { Timestamp, doc } from "firebase/firestore";

function createShareApi(shareData) {
  const userRef = doc(db, "users", shareData.uid);
  const share = {
    ...shareData,
    date: Timestamp.now(),
    user: userRef,
    likesCount: 0,
    subShareCount: 0
  };
  console.log(share);
  return share;
}
export { createShareApi };
