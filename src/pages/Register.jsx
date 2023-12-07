import React, { useState } from 'react';
import { auth } from '../shared/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Register() {
  const [inputs, setInputs] = useState({
    email: '',
    nickname: '',
    password: ''
  });
  const navigate = useNavigate();

  const changeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };

  const clearInputs = () => {
    setInputs({
      email: '',
      nickname: '',
      password: ''
    });
  };

  const checkInputs = () => {
    if (
      inputs.email.trim().length === 0 ||
      inputs.email.trim().length === 0 ||
      inputs.nickname.trim().length === 0
    ) {
      toast.error('정보를 모두 입력해주세요');
      clearInputs();
      return;
    }
    if (inputs.nickname.length < 2) {
      toast.error('닉네임은 2자 이상으로 만들어주세요');
      clearInputs();
      return;
    }
    return true;
  };

  const errorMsg = (code) => {
    switch (code) {
      case 'auth/user-not-found' || 'auth/wrong-password':
        return '이메일 또는 비밀번호가 일치하지 않습니다.';
      case 'auth/email-already-in-use':
        return '이미 사용 중인 이메일입니다.';
      case 'auth/weak-password':
        return '비밀번호는 6자 이상이어야 합니다.';
      case 'auth/network-request-failed':
        return '네트워크 연결에 실패 하였습니다.';
      case 'auth/invalid-email':
        return '잘못된 이메일 형식입니다.';
      case 'auth/internal-error':
        return '잘못된 요청입니다.';
      default:
        return '로그인에 실패 하였습니다.';
    }
  };

  // 회원가입
  const registerUser = async (e) => {
    e.preventDefault();

    if (!checkInputs()) {
      return;
    }

    const defaultPhotoUrl = '';
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        inputs.email,
        inputs.password
      );
      await updateProfile(userCredential.user, {
        displayName: inputs.nickname,
        photoURL: defaultPhotoUrl
      });
      console.log(userCredential);
      toast.success('회원가입 성공!');
      navigate('/login');
    } catch (error) {
      toast.error(errorMsg(error.code));
    }

    setInputs({
      email: '',
      nickname: '',
      password: ''
    });
  };

  const moveToLoginPage = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <Wrapper>
      <Form>
        <h1>회원가입</h1>
        <input
          type="email"
          placeholder="이메일"
          name="email"
          value={inputs.email}
          onChange={changeInputs}
        />
        <input
          type="text"
          placeholder="닉네임"
          name="nickname"
          value={inputs.nickname}
          onChange={changeInputs}
        />
        <input
          type="password"
          placeholder="비밀번호"
          name="password"
          value={inputs.password}
          onChange={changeInputs}
        />
        <button onClick={registerUser}>회원가입</button>
        <span onClick={moveToLoginPage}>로그인 하러가기</span>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 50%;
  padding: 30px;
  border-radius: 10px;
  background-color: var(--light-blue);

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 30px;
  }

  input {
    width: 50%;
    border: none;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  input:nth-child(4) {
    margin-bottom: 20px;
  }

  button {
    width: 50%;
    margin-bottom: 10px;
  }

  span {
    margin-top: 10px;
    cursor: pointer;
    color: var(--deep-blue);
    font-weight: bold;
  }
`;

