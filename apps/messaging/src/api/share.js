import { db } from "$db";
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query
} from "firebase/firestore";

async function createShareApi(shareData) {
  const userRef = doc(db, "users", shareData.uid);
  const share = {
    ...shareData,
    date: Timestamp.now(),
    user: userRef,
    likesCount: 0,
    subShareCount: 0
  };
  const addSharesCollection = collection(db, "shares");
  const docId = await addDoc(addSharesCollection, share);
  const data = { ...share, id: docId.id };
  return data;
}

async function fetchSharesCollection() {
  const constraints = [orderBy("date", "desc")];
  const search = query(collection(db, "shares"), ...constraints);
  const searchSnapShot = await getDocs(search);

  const sharedData = Promise.all(
    searchSnapShot.docs.map(async (doc) => {
      const sharedata = doc.data();
      const userSnapshot = await getDoc(sharedata.user);
      sharedata.user = userSnapshot.data();

      return { ...sharedata, id: doc.id };
    })
  );
  console.log(sharedData);
  return sharedData;
}

export { createShareApi, fetchSharesCollection };
