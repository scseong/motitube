import React from 'react';
import VideoInfo from './VideoInfo';
import { useQuery } from 'react-query';
import { getVideo } from 'api/video';

export default function FetchLoader({ videoId }) {
  const { isLoading, data } = useQuery(['video', videoId], () => getVideo(videoId));

  return <>{!isLoading && <VideoInfo {...data.items[0].snippet} />}</>;
}
