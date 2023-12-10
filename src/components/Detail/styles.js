import styled from 'styled-components';

/* Detail Page */
export const StDetailWrapper = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1rem;

  & > section:first-child {
    flex-basis: 70vw;
    min-width: 70vw;
  }

  & > section:last-child {
    flex-basis: 30vw;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    flex-direction: column;

    & > section {
      flex-basis: 100% !important;
    }
  }
`;

/* Sidebar */
export const StSidebar = styled.div`
  padding: 0.6rem 1rem;
  border-radius: 12px;
`;

export const StSidebarNav = styled.ul`
  display: flex;
  gap: 1rem;
  width: 100%;

  button {
    display: inline-block;
    min-width: 60px;
    height: 32px;
    padding: 0.4rem 0.8rem;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    font-size: 14px;
    user-select: none;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }

    &.active {
      background-color: #f1f1f1;
      color: black;
    }
  }
`;

/* VideoInfo */
export const StMovieInfo = styled.div`
  margin-top: 1rem;

  h2 {
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 700;
    word-break: break-word;
  }

  & > div {
    margin: 8px 0;
  }

  pre {
    // TODO: 더보기
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    font-size: 0.9rem;
    line-height: 1.2rem;
    white-space: pre-wrap;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`;

/* VideoPlayer */
export const StMoviePlayer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
