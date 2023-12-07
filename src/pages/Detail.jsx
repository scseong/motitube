import React from 'react';
import { Sidebar, VideoInfo, VideoPlayer } from 'components/Detail';
import styled from 'styled-components';

export default function Detail() {
  return (
    <StDetailWrapper>
      <section>
        <VideoPlayer />
        <VideoInfo />
      </section>
      <section>
        <Sidebar />
      </section>
    </StDetailWrapper>
  );
}

const StDetailWrapper = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1rem;

  & > section:first-child {
    flex-basis: 70%;
  }

  & > section:last-child {
    flex-basis: 30%;
  }
`;
