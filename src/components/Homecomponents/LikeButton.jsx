import React, { useState } from 'react';
import styled from 'styled-components';

const LikeButton = () => {
  const [isLiked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    setLiked((prevLiked) => !prevLiked);

    setLikeCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
  };

  return (
    <StyledLikeButton onClick={handleLikeClick} isLiked={isLiked}>
      {isLiked ? '좋아요 취소' : '좋아요'}
      <span>{likeCount}</span>
    </StyledLikeButton>
  );
};

const StyledLikeButton = styled.button`
  background-color: ${(props) => (props.isLiked ? '#ffcc00' : 'transparent')};
  color: ${(props) => (props.isLiked ? '#fff' : '#ffcc00')};
  border: 1px solid #ccc;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${(props) => (props.isLiked ? '#ffd633' : '#f0f0f0')};
  }

  span {
    margin-left: 8px;
  }
`;

export default LikeButton;
