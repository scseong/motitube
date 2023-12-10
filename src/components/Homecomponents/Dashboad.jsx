import React, { useState, useEffect, useRef } from 'react';
import { Slide } from './Slide';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import useInput from 'hooks/useInput';
import { v4 as uuidv4 } from 'uuid';
import { formattedDate } from 'util/date';
import { useMutation, useQueryClient } from 'react-query';
import { getPosts } from 'api/post';
import { Stcontainer, Stbutton, StsliderContainer } from './styles';

export const Dashboad = () => {
  const { data, isLoading, isError } = useQuery('todos', getPosts);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { value: url } = useInput('');
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const TOTAL_SLIDES = 3;

  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }
  }, [currentSlide, slideRef]);

  const mutationAddPost = useMutation({
    mutationFn: getPosts,
    onSuccess: () => {
      queryClient.invalidateQueries('post');
    },
    onError: (error) => {
      console.log(error);
    }
  });

  const videoId = url.split('=')[1];
  const newPost = {
    url,
    id: uuidv4(),
    timestamp: formattedDate(Date.now()),
    thumbnail: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
    videoId
  };

  if (mutationAddPost.isSuccess) {
    navigate(newPost.thumbnail);
  }

  if (isLoading) {
    return <h1>로딩 중입니다....!</h1>;
  }

  if (isError) {
    return <h1>오류가 발생하였습니다...!</h1>;
  }
  return (
    <>
      <Stcontainer>
        <div type="button">
          <Stbutton onClick={prevSlide}>◁◁</Stbutton>
          <Stbutton onClick={nextSlide}>▷▷</Stbutton>
        </div>
        {/* {currentSlide} */}
        <StsliderContainer ref={slideRef}>
          {data.map((item) => (
            <>
              <Link key={item.id} to={`${item.url}`}>
                <Slide key={item.id} imagePath={item.thumbnail} />
              </Link>
            </>
          ))}
        </StsliderContainer>
      </Stcontainer>
    </>
  );
};
