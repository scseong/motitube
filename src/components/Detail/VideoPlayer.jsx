import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

export default function VideoPlayer({ videoId = 'H6cuAclri98' }) {
  return (
    <StMoviePlayer>
      <YouTube
        width="100%"
        height="100%"
        videoId={videoId}
        opts={{ playerVars: { autoplay: 1 } }}
      />
    </StMoviePlayer>
  );
}

const StMoviePlayer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
