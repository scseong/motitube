import React, { useState, useEffect } from 'react';
import { getFilterdPosts } from 'api/post';
import RecommendMovie from './RecommendMovie';
import { StRecommentMovieList } from './styles';

export default function RecommendMovies({ tag }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!tag) return;
    const fetchData = async () => {
      const res = await getFilterdPosts('tag', tag);
      setPosts(res);
    };
    fetchData();
  }, [tag]);

  return (
    <StRecommentMovieList>
      {posts.map((post) => (
        <RecommendMovie key={post.id} {...post} />
      ))}
    </StRecommentMovieList>
  );
}
