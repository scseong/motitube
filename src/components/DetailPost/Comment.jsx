import React from 'react';
import { StCommentAvatar, StCommentDetail, StCommentItem } from './styles';
import { formatRelativeTime } from 'util/date';

export default function Comment({ userName, avatar, createdAt, content }) {
  return (
    <StCommentItem>
      <StCommentAvatar>
        <img src={'https://placehold.co/40x40' || avatar} alt="avatar" />
      </StCommentAvatar>
      <StCommentDetail>
        <div>
          <strong>{userName}</strong>
          <span>{formatRelativeTime(createdAt)}</span>
        </div>
        {/* TODO: 자세히, 간략히 */}
        <p>{content}</p>
      </StCommentDetail>
    </StCommentItem>
  );
}
