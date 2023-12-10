import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from 'shared/firebase';

export const getComments = async () => {
  const querySnapshot = await getDocs(collection(db, 'comments'));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const addComment = async ({ newComment }) => {
  await addDoc(collection(db, 'comments'), newComment);
};
