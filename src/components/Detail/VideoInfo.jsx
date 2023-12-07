import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YoutubeChannel from 'components/Channel/YoutubeChannel';
import styled from 'styled-components';

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

const StMovieInfo = styled.div`
  margin-top: 1rem;

  h2 {
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 700;
    letter-spacing: -2px;
    word-break: break-word;
  }

  & > div {
    margin: 8px 0;
  }

  pre {
    // TODO: 더보기
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    font-size: 0.9rem;
    line-height: 1.2rem;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;
