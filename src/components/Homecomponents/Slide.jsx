import React from 'react';
import styled from 'styled-components';

export const Slide = ({ imagePath }) => {
  return (
    <Stbox>
      <div>
        <Stn1 type="text">영상보러가기</Stn1>
        <img src={imagePath} alt="Slide" />
      </div>
    </Stbox>
  );
};

//Slide 컴포넌트 css
export const Stbox = styled.div`
  white-space: nowrap;
  overflow-x: auto;

  & > div {
    width: 40vw;
    height: 40vw;
    margin: 20px 1px auto 0px;
    background-color: black;
    overflow: hidden;
  }

  img {
    max-width: 100%;
    height: 100%;
    border-radius: 15px;
  }
`;
export const Stn1 = styled.h1`
  display: flex;
  margin: 2px 10px 15px 10px;
  max-width: 140px;
  padding: 4px;
  border-radius: 5px;
  justify-content: center;
  color: #f1cc13;
  border: 1px solid #ff8400;

  &:hover {
    background-color: #ff8400;
  }
`;
