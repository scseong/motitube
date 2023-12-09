import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from 'shared/firebase';

export const getPosts = async () => {
  const querySnapshot = await getDocs(collection(db, 'post'));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getPost = async (postId) => {
  const q = query(collection(db, 'post'), where('id', '==', `${postId}`));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data())[0];
};

export const addPost = async (newPost) => {
  await addDoc(collection(db, 'post'), newPost);
};
