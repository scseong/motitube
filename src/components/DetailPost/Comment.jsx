import React from 'react';
import { StCommentAvatar, StCommentDetail, StCommentItem, StCommentMore } from './styles';
import { formatRelativeTime } from 'util/date';
// import { IoMdMore } from 'react-icons/io';

export default function Comment({ id, userName, avatar, createdAt, content }) {
  return (
    <StCommentItem>
      <StCommentAvatar>
        <img src={avatar} alt="avatar" />
      </StCommentAvatar>
      <StCommentDetail>
        <div>
          <strong>{userName}</strong>
          <span>{formatRelativeTime(createdAt)}</span>
        </div>
        {/* TODO: 자세히, 간략히 */}
        <p>{content}</p>
      </StCommentDetail>
      {/* <StCommentMore>{isCommentHover && <IoMdMore size="2rem" />}</StCommentMore> */}
    </StCommentItem>
  );
}
