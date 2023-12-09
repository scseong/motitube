import React, { useState, useEffect, useRef } from 'react';
import { Slide } from './Slide';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Images = [
  {
    id: 0,
    pathurl:
      'https://i.ytimg.com/an_webp/4SHwZ0bxoc4/mqdefault_6s.webp?du=3000&sqp=CL7O0KsG&rs=AOn4CLDQlouwE0piG-RuNiJMzuvy_LxROg',
    destination: 'https://www.youtube.com/watch?v=BtDEB3yyy_I'
  },
  {
    id: 1,
    pathurl:
      'https://i.ytimg.com/an_webp/nFBoJ5SKe2s/mqdefault_6s.webp?du=3000&sqp=CMjS0KsG&rs=AOn4CLA1l68yvxaP1IWZXlmxU6C2kHfeIQ',
    destination: 'https://www.youtube.com/watch?v=eA7zGw3hhmg'
  },
  {
    id: 2,
    pathurl:
      'https://i.ytimg.com/an_webp/RA2MMAE4IEc/mqdefault_6s.webp?du=3000&sqp=CP6fzKsG&rs=AOn4CLD5458O2eZ6UJ6MBPK0THqla1uVkA',
    destination: 'https://www.youtube.com/watch?v=RA2MMAE4IEc'
  },
  {
    id: 0,
    pathurl:
      'https://i.ytimg.com/an_webp/4SHwZ0bxoc4/mqdefault_6s.webp?du=3000&sqp=CL7O0KsG&rs=AOn4CLDQlouwE0piG-RuNiJMzuvy_LxROg',
    destination: 'https://www.youtube.com/watch?v=BtDEB3yyy_I'
  },
  {
    id: 0,
    pathurl:
      'https://i.ytimg.com/an_webp/4SHwZ0bxoc4/mqdefault_6s.webp?du=3000&sqp=CL7O0KsG&rs=AOn4CLDQlouwE0piG-RuNiJMzuvy_LxROg',
    destination: 'https://www.youtube.com/watch?v=BtDEB3yyy_I'
  }
];

export const Banner = () => {
  const TOTAL_SLIDES = 5;
  const [currentSlide, setCurrentSlide] = useState(0);
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
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <Container>
      {currentSlide}
      <SliderContainer ref={slideRef}>
        {Images.map((item) => (
          <Link key={item.id} to={item.destination}>
            <Slide key={item.id} imagePath={item.pathurl} />
          </Link>
        ))}
      </SliderContainer>
      <Button onClick={prevSlide}>◁</Button>
      <Button onClick={nextSlide}>▷</Button>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const Button = styled.button`
  display: flex;
  position: relative;
  all: unset;

  border: 1px solid red;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  width: 100%;
  display: flex; //이미지들을 가로로 나열합니다.
`;
const ButtonAlign = styled.div`
  position: relative;
  margin: auto 30px auto 90px;
  left: 40vw;
`;
