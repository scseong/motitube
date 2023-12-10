import { addDoc, collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from 'shared/firebase';

export const getComments = async () => {
  const q = query(collection(db, 'comments'), orderBy('createdAt'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const addComment = async (newComment) => {
  await addDoc(collection(db, 'comments'), newComment);
};
