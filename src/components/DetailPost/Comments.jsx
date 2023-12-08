import React from 'react';
import {
  StCommentAvatar,
  StCommentContainer,
  StCommentDetail,
  StCommentHeader,
  StCommentInput,
  StCommentItem,
  StCommentList,
  StWrapper
} from './styles';

export default function Comments() {
  return (
    <StWrapper>
      <StCommentHeader>
        <span>댓글 2개</span>
        <StCommentContainer>
          <StCommentAvatar>
            <img src="https://placehold.co/40x40" alt="avatar" />
          </StCommentAvatar>
          <StCommentInput>
            {/* TODO: RESIZE */}
            <textarea name="comments" cols="30" rows="1" placeholder="댓글 추가..." />
            <div>
              <button>취소</button>
              <button>댓글</button>
            </div>
          </StCommentInput>
        </StCommentContainer>
      </StCommentHeader>
      <StCommentList>
        <StCommentItem>
          <StCommentAvatar>
            <img src="https://placehold.co/40x40" alt="avatar" />
          </StCommentAvatar>
          <StCommentDetail>
            <div>
              <strong>닉네임</strong>
              <span>1년 전</span>
            </div>
            {/* TODO: 자세히, 간략히 */}
            <p>
              막연하게 실천하던 부분을 명쾌하게 정리되어 알아가서 좋아요. 덕분에 내 행동에 대한
              자신감과 믿음이 생겨나는게 특히 좋았어요. 가끔 고통을 회피하기 위해 집에서 뒹굴면서
              스마트폰 보는 나를 바꾸고 싶은데~ 휴식이라는 핑계로 집에 있던 나를 밖으로 나갈 합리적
              이유를 만들어주시네요.
            </p>
          </StCommentDetail>
        </StCommentItem>
        <StCommentItem>
          <StCommentAvatar>
            <img src="https://placehold.co/40x40" alt="avatar" />
          </StCommentAvatar>
          <StCommentDetail>
            <div>
              <strong>도파민</strong>
              <span>1일 전</span>
            </div>
            <p>
              선생님 도파민에 올바른 활용법에 대해서 알려주셔서 너무 감사합니다 덕분에 한결 머리가
              정리되었어요 인생에 대해서 한 수 배워갑니다
            </p>
          </StCommentDetail>
        </StCommentItem>
      </StCommentList>
    </StWrapper>
  );
}
