import React, { useState, useEffect } from 'react';
import { RecommendMovies, PostInfo, Comments } from 'components/DetailPost';
import { StSidebar, StSidebarNav } from './styles';
import { getPost } from 'api/post';

const tabs = {
  recommend: '추천',
  related: '관련 영상',
  comments: '댓글'
};

export default function Sidebar({ postId }) {
  const [postInfo, setPostInfo] = useState({});
  const [selectedTab, setSelectedTab] = useState(tabs.recommend);
  const handleClickBtn = (e) => setSelectedTab(e.target.name);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getPost(postId);
      setPostInfo(res);
    };

    fetchData();
  }, [postId]);

  return (
    <StSidebar>
      <StSidebarNav>
        {Object.values(tabs).map((btnName) => (
          <li key={btnName}>
            <button
              className={selectedTab === btnName ? 'active' : undefined}
              onClick={handleClickBtn}
              name={btnName}
            >
              {btnName}
            </button>
          </li>
        ))}
      </StSidebarNav>
      {selectedTab.includes(tabs.recommend) && <PostInfo postInfo={postInfo} />}
      {selectedTab.includes(tabs.related) && <RecommendMovies />}
      {selectedTab.includes(tabs.comments) && <Comments postId={postId} />}
    </StSidebar>
  );
}
