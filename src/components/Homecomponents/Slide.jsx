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
    max-width: 100%;
    max-height: 100%;
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
