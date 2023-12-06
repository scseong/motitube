import React, { useState } from 'react';
import { darkTheme } from 'styles/theme';
import styled from 'styled-components';

export default function Write() {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <StDiv>
      <StForm>
        <div>
          <StButton>등록하기</StButton>
        </div>

        <StInputDiv>
          <StUrlTitleInput
            type="url"
            value={url}
            placeholder="URL을 입력하세요."
            onChange={handleUrlChange}
          />
          <StUrlTitleInput
            type="text"
            value={title}
            placeholder="제목을 입력하세요."
            onChange={handleTitleChange}
          />
          <StContentTextarea
            type="text"
            value={content}
            placeholder="내용을 입력하세요."
            onChange={handleContentChange}
          />
        </StInputDiv>
      </StForm>
    </StDiv>
  );
}

const StDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StForm = styled.form`
  border: 2px solid ${darkTheme.primaryColor};
  border-radius: 15px;
  width: 700px;
  height: 450px;
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  /* align-items: center; */
`;

const StButton = styled.button`
  border: 1px solid ${darkTheme.primaryColor};
  border-radius: 10px;
  color: gray;
  float: right;
  cursor: pointer;
  padding: 10px;
  &:hover {
    color: white;
  }
`;

const StInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%;
  height: 100%; */
  margin-top: 20px;
  gap: 20px;
`;

const StUrlTitleInput = styled.input`
  border: 2px solid ${darkTheme.primaryColor};
  border-radius: 10px;
  display: flex;
  height: 50px;
  padding-left: 10px;
  color: white;
`;

const StContentTextarea = styled.textarea`
  border: 2px solid ${darkTheme.primaryColor};
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 10px;
  height: 200px;
  color: white;
`;

