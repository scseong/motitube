import React from 'react';
import styled from 'styled-components';

export const Slide = ({ imagePath }) => {
  return (
    <SlideContainer>
      <img src={imagePath} />
    </SlideContainer>
  );
};

const SlideContainer = styled.div`
  display: flex;
  width: 100%;
  img {
    width: 100vw;
    height: 20vw;
  }
`;
