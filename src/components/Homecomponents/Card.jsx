import React, { useState } from 'react';
import { StContent, StPostContainer, Stusername, Sttimestamp, StcardImage } from './styles';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useQuery } from 'react-query';
import { getPosts } from 'api/post';
import useInput from 'hooks/useInput';
import { formattedDate } from 'util/date';
import { useMutation, useQueryClient } from 'react-query';
import LikeButton from './LikeButton';

const Card = () => {
  const { data, isLoading, isError } = useQuery('todos', getPosts);

  const navigate = useNavigate();
  const { value: url } = useInput('');
  const queryClient = useQueryClient();

  const videoId = url.split('=')[1];
  const newPost = {
    url,
    id: uuidv4(),
    timestamp: formattedDate(Date.now()),
    thumbnail: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
    videoId
  };

  const mutationgetPost = useMutation({
    mutationFn: getPosts,
    onSuccess: () => {
      queryClient.invalidateQueries('post');
    },
    onError: (error) => {
      console.log(error);
    }
  });

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  if (isError) {
    return <p>데이터를 불러오는 중 오류가 발생했습니다</p>;
  }

  const CardImageClickHandler = () => {
    if (!mutationgetPost.isSuccess) {
      navigate(`posts/${newPost.id}`);
    }
  };

  return (
    <StPostContainer>
      {data.map((item) => (
        <div key={item.id}>
          <div>
            <h1>카테고리:{item.tag}</h1>
            <StcardImage onClick={CardImageClickHandler} src={item.thumbnail}></StcardImage>
          </div>
          <div>
            <Stusername>
              {item.avatar}
              {item.userName}님
            </Stusername>
          </div>
          <div>
            <StContent>{item.content}</StContent>
          </div>
          <Sttimestamp>{item.timestamp}</Sttimestamp>
          <LikeButton>좋아요</LikeButton>
        </div>
      ))}
    </StPostContainer>
  );
};

export default Card;
