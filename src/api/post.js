import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from 'shared/firebase';

export const getPosts = async () => {
  const querySnapshot = await getDocs(collection(db, 'post'));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const addPost = async ({ newPost }) => {
  await addDoc(collection(db, 'post'), {
    newPost
  });
};

