import { styled } from 'styled-components';

/* PostInfo */
export const StUserInfo = styled.div`
  padding: 1rem 0;

  img {
    margin-right: 8px;
    width: 35px;
    height: 35px;
    display: inline-block;
    border-radius: 50%;
  }

  div {
    display: inline-block;
    transform: translateY(-2px);
    & > p:first-child {
      margin-bottom: 4px;
    }
    & > p:last-child {
      font-size: 0.8rem;
      opacity: 0.6;
    }
  }
`;

export const StPostInfo = styled.div`
  padding: 0 0 1rem 0;
  h3 {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    line-height: 1.6rem;
    font-weight: bold;
  }
  pre {
    font-size: 1.1rem;
    line-height: 1.4rem;
    white-space: pre-wrap;
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const StTags = styled.div`
  li {
    padding: 0 0.5rem;
    display: inline-block;
    font-style: italic;
  }
`;

export const StActionMenu = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    button {
      padding: 0.5rem;
      display: flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;
    }
  }
`;

/* Comments */
export const StWrapper = styled.div`
  padding: 2rem 0;
`;

export const StCommentHeader = styled.header`
  & > span {
    display: block;
    font-size: 1.2rem;
    line-height: 1.4rem;
    font-weight: bold;
  }
`;

export const StCommentContainer = styled.div`
  display: flex;
  padding: 1rem 0;
`;

export const StCommentAvatar = styled.div`
  display: flex;

  img {
    margin-right: 1rem;
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
`;

export const StCommentInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  user-select: none;

  textarea {
    margin-bottom: 8px;
    padding: 2px 0 6px 0;
    width: 100%;
    font-size: 14px;
    border-bottom: 1px solid #999;
    overflow-y: hidden;
    resize: none;
    transition: border 0.3s ease-in-out;

    &:focus {
      border-bottom: 1px solid #fff;
    }
  }

  div {
    button {
      padding: 0.5rem 1rem;
      border-radius: 14px;
      cursor: pointer;

      &:first-child:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }

      &:last-child {
        margin-left: 8px;
        background-color: rgba(255, 255, 255, 0.2);
        cursor: default;
      }
    }
  }
`;

export const StCommentList = styled.div``;

export const StCommentItem = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const StCommentDetail = styled.div`
  & > div:first-child {
    margin-bottom: 8px;

    strong {
      font-weight: bold;
      margin-right: 4px;
    }

    span {
      font-size: 0.8rem;
      opacity: 0.7;
    }
  }
  p {
    font-size: 14px;
    line-height: 1.2rem;
    word-break: break-all;
  }
`;

/* RecommendMovies */
export const StRecommentMovieList = styled.div`
  padding: 1rem 0;
`;

export const StRecommentMovie = styled.div`
  margin-bottom: 0.8rem;
  a {
    display: flex;
    gap: 8px;
    & > div:first-child {
      img {
        width: 170px;
        height: 100px;
        border-radius: 8px;
      }
    }

    & > div:last-child {
      padding: 8px 0;
    }
  }

  span {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 8px;
    font-size: 0.8rem;
    line-height: 1rem;
    text-overflow: ellipsis;
    overflow: hidden;
    color: rgba(255, 255, 255, 0.6);
  }

  span:first-child {
    font-size: 1rem;
    color: #fff;
  }
`;
