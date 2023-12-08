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
