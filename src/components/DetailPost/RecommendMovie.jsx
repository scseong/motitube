import React from 'react';
import { StRecommentMovie } from './styles';
import { Link } from 'react-router-dom';

export default function RecommendMovie({ thumbnail, title, userName, id, timestamp }) {
  return (
    <StRecommentMovie>
      <Link to={`/posts/${id}`}>
        <div>
          <img src={thumbnail} alt="thumbnail" />
        </div>
        <div>
          <span title={title}>{title}</span>
          <span>{userName}</span>
          <span>{timestamp.slice(0, 10)}</span>
        </div>
      </Link>
    </StRecommentMovie>
  );
}
