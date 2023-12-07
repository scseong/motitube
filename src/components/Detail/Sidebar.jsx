import Comments from 'components/DetailPost/Comments';
import PostInfo from 'components/DetailPost/PostInfo';
import RecommendMovies from 'components/DetailPost/RecommendMovies';
import React, { useState } from 'react';
import { StSidebar, StSidebarNav } from './styles';

const tabs = {
  recommend: '추천',
  related: '관련 영상',
  comments: '댓글'
};
const postInfo = {
  id: 0,
  title: '우리가 모두 너무나 비참한 이유는, 비참함을 피하려고 너무 열심히 노력하기 때문이다.',
  content:
    '우리는 고통을 피하려는 욕망이 쾌락을 향해 더 나아가고, 그 결과로 중독의 함정에 빠집니다. \n\n고통을 덜어주는 쾌락을 찾기 쉽지만, 그 안에서 절제와 균형을 유지하며 더 나은 삶을 찾아가는 것이 중요합니다.',
  tag: '성공',
  timestamp: Date.now(),
  url: '',
  userId: '123',
  userName: '도파민 중독',
  avatar: ''
};

export default function Sidebar() {
  const [selectedTab, setSelectedTab] = useState(tabs.recommend);
  const handleClickBtn = (e) => setSelectedTab(e.target.name);

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
      {selectedTab === tabs.recommend && <PostInfo postInfo={postInfo} />}
      {selectedTab === tabs.related && <RecommendMovies />}
      {selectedTab === tabs.comments && <Comments />}
    </StSidebar>
  );
}
