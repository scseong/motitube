import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../shared/firebase';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../redux/modules/Auth';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const changeInputs = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const clearInputs = () => {
    setInputs({
      email: '',
      password: ''
    });
  };

  const checkInputs = () => {
    if (inputs.email.trim().length === 0 || inputs.email.trim().length === 0) {
      toast.error('이메일과 비밀번호 모두 입력해주세요');
      clearInputs();
      return;
    }
    if (!inputs.email.includes('@')) {
      toast.error('올바른 이메일 형식을 입력해주세요');
      clearInputs();
      return;
    }
  };

  // email 로그인
  const loginEmail = async (e) => {
    e.preventDefault();
    checkInputs();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, inputs.email, inputs.password);
      console.log(userCredential.user.accessToken);
      toast.success('로그인 되었습니다!');
      localStorage.setItem('accessToken', userCredential.user.accessToken);
      dispatch(login(userCredential.user));
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  // google 로그인
  const loginGoogle = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      toast.success('로그인 되었습니다!');
      localStorage.setItem('accessToken', userCredential.user.accessToken);
      navigate('/');
      dispatch(login(userCredential.user));
    } catch (error) {
      console.log(error.message);
    }
  };

  const moveToRegisterPage = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <ScWrapper>
      <ScForm>
        <h1>로그인</h1>
        <input
          type="email"
          placeholder="이메일"
          name="email"
          value={inputs.email}
          onChange={changeInputs}
        />
        <input
          type="password"
          placeholder="비밀번호"
          name="password"
          required
          value={inputs.password}
          onChange={changeInputs}
        />
        <button onClick={loginEmail}>로그인</button>
        <button onClick={loginGoogle}>구글로 로그인</button>
        <span onClick={moveToRegisterPage}>회원가입 하러가기</span>
      </ScForm>
    </ScWrapper>
  );
};

const ScWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const ScForm = styled.form`
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

  input:nth-child(3) {
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

export default Login;

