import React from 'react';
import { Sidebar, VideoInfo, VideoPlayer } from 'components/Detail';
import { useQuery } from 'react-query';
import { getVideo } from 'api/video';
import { StDetailWrapper } from '../components/Detail/styles';

export default function Detail() {
  const { isLoading, data } = useQuery(['video'], () => getVideo('video.json'));
  const postId = 'c6bafd71-78c7-4f01-a6ef-c51d6cec5843'; // TODO: params

  return (
    <StDetailWrapper>
      <section>
        <VideoPlayer />
        {!isLoading && <VideoInfo videoInfo={data.items[0]} />}
      </section>
      <section>
        <Sidebar postId={postId} />
      </section>
    </StDetailWrapper>
  );
}
