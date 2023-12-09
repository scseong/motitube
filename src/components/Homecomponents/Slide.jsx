import React from 'react';
import styled from 'styled-components';

export const Slide = ({ imagePath }) => {
  return (
    <SlideContainer>
      <div>
        <img src={imagePath} />
      </div>
    </SlideContainer>
  );
};

const SlideContainer = styled.div`
  display: flex;
  overflow: hidden;
  border: 5px solid white;
  padding: 90px;
  width: 1515px; /* Golden ratio width (approximately 1.618) */
  height: 700px; /* Golden ratio height (approximately 1.0) */
  margin: 20px 1px auto 0px;

  & > div {
    width: 100%;
    height: 100%;
    border: 5px solid white;
    margin: 5px auto auto 10px;
    overflow: hidden;
  }

  img {
    width: 50%;
    height: 70%;
    object-fit: cover;
    margin: 60px auto auto 500px;
    border-radius: 15px;
  }
`;

// const InnerBox = styled.div`

// const Image = styled.img`
//   /* Rounded corners for a nicer look */
// `;
