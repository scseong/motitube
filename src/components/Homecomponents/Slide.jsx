import React from 'react';
import styled from 'styled-components';

export const Slide = ({ imagePath }) => {
  return (
    <Stbox>
      <div>
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
    height: 22vw;
    margin: 20px 1px auto 0px;
    background-color: black;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      border: 3px solid black;
    }
  }
  img {
    max-width: 100%;
    height: 100%;
    border-radius: 15px;
  }
`;
