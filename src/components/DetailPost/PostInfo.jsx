import React from 'react';
import { StActionMenu, StPostInfo, StTags, StUserInfo } from './styles';
import { AiOutlineLike, AiOutlineShareAlt } from 'react-icons/ai';

export default function PostInfo({ postInfo }) {
  const { title, content, userName, timestamp, avatar, tag } = postInfo;

  return (
    <>
      <StUserInfo>
        <img src={avatar} alt="avatar" />
        <div>
          <p>{userName}</p>
          <p>{timestamp} </p>
        </div>
      </StUserInfo>
      <StPostInfo>
        <h3>{title}</h3>
        <pre>{content}</pre>
      </StPostInfo>
      <StTags>
        <ul>
          <li>#{tag}</li>
        </ul>
      </StTags>
      <StActionMenu>
        <div>
          <button>
            <AiOutlineLike size="1rem" /> 좋아요
          </button>
        </div>
        <div>
          <button>
            <AiOutlineShareAlt size="1rem" />
          </button>
        </div>
      </StActionMenu>
    </>
  );
}
