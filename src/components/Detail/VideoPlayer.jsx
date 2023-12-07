import React from 'react';
import YouTube from 'react-youtube';
import { StMoviePlayer } from './styles';

export default function VideoPlayer({ videoId = 'Zak0hAAsPfA' }) {
  return (
    <StMoviePlayer>
      <YouTube width="100%" height="100%" videoId={videoId} />
    </StMoviePlayer>
  );
}
