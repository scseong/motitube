import React, { useState, useEffect } from 'react';
import { Sidebar, VideoPlayer, FetchLoader } from 'components/Detail';
import { StDetailWrapper } from '../components/Detail/styles';
import { getPost } from 'api/post';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const [postInfo, setPostInfo] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getPost(postId);
      setPostInfo(res);
    };

    fetchData();
  }, [postId]);

  return (
    <StDetailWrapper>
      <section>
        <VideoPlayer videoId={postInfo.videoId} />
        {Object.keys(postInfo).length && <FetchLoader videoId={postInfo.videoId} />}
      </section>
      <section>
        <Sidebar postInfo={postInfo} postId={postId} />
      </section>
    </StDetailWrapper>
  );
}
