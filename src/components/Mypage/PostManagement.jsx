// PostManagement.jsx
import React, { useState, useEffect } from 'react';
import { db } from 'shared/firebase';
import { collection, query, where, onSnapshot, doc, deleteDoc } from 'firebase/firestore';

export default function PostManagement() {
  const [posts, setPosts] = useState([]);
  const userId = 'sampleUserId';

  useEffect(() => {
    const postsQuery = query(collection(db, 'posts'), where('userId', '==', userId));
    const unsubscribe = onSnapshot(postsQuery, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
    return () => unsubscribe();
  }, [userId]);

  const deletePost = async (id) => {
    await deleteDoc(doc(db, 'posts', id));
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          {post.data.content}
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
