import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YoutubeChannel from 'components/Channel/YoutubeChannel';
import { StMovieInfo } from './styles';

export default function VideoInfo() {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async (url) => {
      const { data } = await axios.get('/videos/video.json');
      setData(data.items[0].snippet);
    };

    fetchData();
  }, []);

  const {
    publishedAt,
    channelId,
    title,
    description,
    thumbnails,
    channelTitle,
    tags,
    categoryId,
    localized
  } = data;

  return (
    <StMovieInfo>
      <h2>{title}</h2>
      <YoutubeChannel name={channelTitle} channelId={channelId} />
      <pre>{description}</pre>
    </StMovieInfo>
  );
}
