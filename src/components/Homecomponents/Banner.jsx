import React, { useState, useEffect, useRef } from 'react';
import { Slide } from './Slide';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Images = [
  {
    id: 1,
    pathurl:
      'https://i.ytimg.com/an_webp/FAlYSplY4SM/mqdefault_6s.webp?du=3000&sqp=CPLTy6sG&rs=AOn4CLBN4z0UUidQvYEyzFAC7iRRSQ1c0Q',
    destination: 'https://www.youtube.com/watch?v=BtDEB3yyy_I'
  },
  {
    id: 2,
    pathurl:
      'https://i.ytimg.com/an_webp/6MrrvIkIIik/mqdefault_6s.webp?du=3000&sqp=COzuy6sG&rs=AOn4CLB20BDyWwCBimFbvFm2GasgDNW-YQ',
    destination: 'https://www.youtube.com/watch?v=eA7zGw3hhmg'
  },
  {
    id: 3,
    pathurl:
      'https://i.ytimg.com/an_webp/RA2MMAE4IEc/mqdefault_6s.webp?du=3000&sqp=CP6fzKsG&rs=AOn4CLD5458O2eZ6UJ6MBPK0THqla1uVkA',
    destination: 'https://www.youtube.com/watch?v=RA2MMAE4IEc'
  }
];

const TOTAL_SLIDES = 2;
export default function Banner() {
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
}
const Container = styled.div`
  width: 100%;
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
