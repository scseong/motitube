import React, { useState } from 'react';
import { StTitle, StPostContainer, Stusername, Sttimestamp, StcardImage } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useQuery } from 'react-query';
import { getSortedPosts } from 'api/post';
import useInput from 'hooks/useInput';
import { formattedDate } from 'util/date';

import LikeButton from './LikeButton';

const Card = () => {
  const { value: url } = useInput('');
  const { data, isLoading, isError } = useQuery('todos', () => getSortedPosts('timestamp'));
  const videoId = url.split('=')[1];
  const newPost = {
    url,
    id: uuidv4(),
    timestamp: formattedDate(Date.now()),
    thumbnail: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
    videoId
  };

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  if (isError) {
    return <p>데이터를 불러오는 중 오류가 발생했습니다</p>;
  }
  const sortedData = data.slice().sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  return (
    <StPostContainer>
      {sortedData.map((item) => (
        <div key={item.id}>
          <div>
            <h1>{item.tag}</h1>
            <Link key={item.id} to={`posts/${item.id}`}>
              <StcardImage src={item.thumbnail}></StcardImage>
            </Link>
          </div>
          <div>
            <Stusername>
              <img src={item.avatar} />
              {item.userName}님
            </Stusername>
          </div>
          <div>
            <StTitle>{item.title}</StTitle>
          </div>

          <Sttimestamp>{item.timestamp}</Sttimestamp>

          <LikeButton>좋아요</LikeButton>
        </div>
      ))}
    </StPostContainer>
  );
};

export default Card;
