import React from 'react';
import YouTube from 'react-youtube';
import { StMoviePlayer } from './styles';

export default function VideoPlayer({ videoId }) {
  return (
    <StMoviePlayer>
      <YouTube width="100%" height="100%" videoId={videoId} />
    </StMoviePlayer>
  );
}
