import React from 'react';
import {
  StCommentAvatar,
  StCommentContainer,
  StCommentHeader,
  StCommentInput,
  StCommentList,
  StWrapper
} from './styles';
import { auth } from 'shared/firebase';
import useComment from 'hooks/useComment';
import { v4 as uuidv4 } from 'uuid';
import useInput from 'hooks/useInput';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Comment from './Comment';

export default function Comments({ postId }) {
  const { value: content, setValue: setContent, onChange } = useInput('');
  const { displayName, uid, photoURL } = auth.currentUser || {};
  const { comments, createComment } = useComment();
  const filtedComments = comments.filter((comment) => comment.postId === postId);
  const navigate = useNavigate();

  const handleCommentBtn = () => {
    createComment({
      userId: uid,
      userName: displayName,
      avatar: photoURL || '',
      content: content,
      id: uuidv4(),
      createdAt: Date.now(),
      postId
    });
    setContent('');
  };

  const handleResetContent = () => setContent('');
  const handleClickTextarea = () => {
    if (!auth.currentUser) {
      toast.warn('로그인이 필요합니다.');
      navigate('/login');
    }
  };

  return (
    <StWrapper>
      <StCommentHeader>
        <span>댓글 {filtedComments.length}</span>
        <StCommentContainer>
          <StCommentAvatar>
            <img src="https://placehold.co/40x40" alt="avatar" />
          </StCommentAvatar>
          <StCommentInput>
            {/* TODO: RESIZE */}
            {/* TODO: FILTER */}
            <textarea
              name="comments"
              cols="30"
              rows="1"
              placeholder="댓글 추가..."
              value={content}
              onClick={handleClickTextarea}
              onChange={onChange}
            />
            <div>
              <button onClick={handleResetContent}>취소</button>
              <button onClick={handleCommentBtn}>댓글</button>
            </div>
          </StCommentInput>
        </StCommentContainer>
      </StCommentHeader>
      <StCommentList>
        {filtedComments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </StCommentList>
    </StWrapper>
  );
}
