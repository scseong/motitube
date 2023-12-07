import React, { useEffect } from 'react';
import styled from 'styled-components';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from 'shared/firebase';
import useInput from 'hooks/useInput';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Write() {
  const { value: url, onChange: handleUrlChange } = useInput();
  const { value: title, onChange: handleTitleChange } = useInput();
  const { value: content, onChange: handleContentChange } = useInput();
  const { value: tag, onChange: handleSelect } = useInput('성공');
  const navigate = useNavigate();

  const selectList = [
    { value: 'success', name: '성공' },
    { value: 'finance', name: '금융' },
    { value: 'time management', name: '시간관리' },
    { value: 'relationships', name: '인간관계' },
    { value: 'etc', name: '기타' }
  ];

  // Date format
  const formattedDate = () =>
    new Date().toLocaleDateString('ko', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

  // firebase 데이터가져오기
  useEffect(() => {
    const fetchData = async () => {
      const querySnapShot = await getDocs(collection(db, 'post'));
      querySnapShot.forEach((doc) => {
        const data = {
          id: doc.id,
          ...doc.data()
        };
        console.log(data);
      });
    };
    fetchData();
  }, []);

  // firebase에 데이터 추가
  const addPost = async (e) => {
    e.preventDefault();
    if (!url) {
      return toast.error('url을 입력해주세요.');
    } else if (!title) {
      return toast.error('제목을 입력해주세요.');
    } else if (!content) {
      return toast.error('내용을 입력해주세요.');
    }
    const newPost = {
      url,
      title,
      content,
      tag,
      id: uuidv4(),
      timestamp: formattedDate(Date.now())
    };
    await addDoc(collection(db, 'post'), newPost);
    alert('게시물이 등록되었습니다.');
    navigate('/');
  };

  return (
    <>
      <ToastContainer />
      <StDiv>
        <StForm onSubmit={addPost}>
          <StButtonDiv>
            <StSelect value={tag} onChange={handleSelect}>
              {selectList.map((item) => {
                return (
                  <option value={item.value} key={item.value}>
                    {item.name}
                  </option>
                );
              })}
            </StSelect>
            <StButton type="submit">등록하기</StButton>
          </StButtonDiv>

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
    </>
  );
}

const StDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StForm = styled.form`
  border: 2px solid ${(props) => props.theme.primaryColor};
  border-radius: 15px;
  width: 700px;
  height: 450px;
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  /* align-items: center; */
`;
const StButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StSelect = styled.select`
  width: 100px;
`;

const StButton = styled.button`
  border: 1px solid ${(props) => props.theme.primaryColor};
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
  border: 2px solid ${(props) => props.theme.primaryColor};
  border-radius: 10px;
  display: flex;
  height: 50px;
  padding-left: 10px;
  color: white;
`;

const StContentTextarea = styled.textarea`
  border: 2px solid ${(props) => props.theme.primaryColor};
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 10px;
  height: 200px;
  color: white;
`;

