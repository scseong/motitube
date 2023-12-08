import React from 'react';
import YoutubeChannel from 'components/Channel/YoutubeChannel';
import { StMovieInfo } from './styles';

export default function VideoInfo({ videoInfo }) {
  const { snippet } = videoInfo;
  const { channelId, title, description, channelTitle } = snippet;

  return (
    <StMovieInfo>
      <h2>{title}</h2>
      <YoutubeChannel name={channelTitle} channelId={channelId} />
      <pre>{description}</pre>
    </StMovieInfo>
  );
}
