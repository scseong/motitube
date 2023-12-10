import { useState, useEffect } from 'react';
import { addComment, getComments } from '../api/comment';

export default function useComment() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allCommnets = await getComments();
      setComments(allCommnets);
    };

    fetchData();
  }, []);

  const createComment = async (newComment) => {
    await addComment({ newComment });
  };

  return { comments, createComment };
}
