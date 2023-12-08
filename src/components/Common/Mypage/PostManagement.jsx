// PostManagement.jsx

import React, { useState, useEffect } from 'react';
import { db } from 'shared/firebase'; // Firebase 데이터베이스를 import합니다.
import { collection, query, where, onSnapshot, doc, deleteDoc } from 'firebase/firestore'; // Firestore 데이터베이스를 위한 함수를 import합니다.
import 'components/Common/Mypage/PostManagement.css';
// 게시글 관리 컴포넌트를 정의합니다.
export default function PostManagement() {
  const [posts, setPosts] = useState([]); // 게시글을 저장할 상태를 선언합니다.
  const userId = 'sampleUserId'; // 사용자 아이디를 선언합니다. 실제 구현에서는 인증된 사용자의 아이디를 사용해야 합니다.

  // 컴포넌트가 마운트될 때 데이터베이스에서 게시글을 불러옵니다.
  useEffect(() => {
    const postsQuery = query(collection(db, 'posts'), where('userId', '==', userId)); // 사용자가 작성한 게시글만 조회하는 쿼리를 생성합니다.
    const unsubscribe = onSnapshot(postsQuery, (snapshot) => {
      // 게시글의 변경사항을 실시간으로 반영합니다.
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))); // 각 게시글의 id와 데이터를 상태로 설정합니다.
    });
    return () => unsubscribe(); // 컴포넌트가 언마운트될 때 실시간 업데이트를 취소합니다.
  }, [userId]);

  // 게시글을 삭제하는 함수를 정의합니다.
  const deletePost = async (id) => {
    await deleteDoc(doc(db, 'posts', id)); // 해당 id를 가진 게시글을 데이터베이스에서 삭제합니다.
  };

  return (
    <div>
      {/* 각 게시글을 표시합니다. */}
      {posts.map((post) => (
        <div key={post.id}>
          {post.data.content}
          <button onClick={() => deletePost(post.id)}>Delete</button>{' '}
          {/* 삭제 버튼을 클릭하면 해당 게시글이 삭제됩니다. */}
        </div>
      ))}
    </div>
  );
}
