import React, { useState } from 'react';
import { auth } from '../shared/firebase';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
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

  const resetInputs = () => {
    setInputs({
      email: '',
      password: ''
    });
  };

  const checkInputs = () => {
    if (inputs.email.trim().length === 0 || inputs.password.trim().length === 0) {
      toast.error('이메일과 비밀번호 모두 입력해주세요');
      resetInputs();
      return;
    }
    if (!inputs.email.includes('@')) {
      toast.error('이메일 형식으로 입력해주세요');
      resetInputs();
      return;
    }
  };

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
      toast.error('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

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
      toast.error('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const moveRegisterPage = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <Wrapper>
      <Form>
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
        <button onClick={loginEmail} style={{ marginBottom: '0px' }}>
          로그인
        </button>
        <button onClick={loginGoogle} style={{ marginTop: '10px' }}>
          구글로 로그인
        </button>
        <div
          style={{
            fontSize: '10px',
            marginTop: '20px'
          }}
        >
          아직 회원가입 전이라면?
        </div>
        <span onClick={moveRegisterPage}>가입 하러가기</span>
      </Form>
    </Wrapper>
  );
};

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
  padding: 40px;
  border-radius: 50px;
  background-color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);

  h1 {
    font-size: 30px;
    margin-bottom: 50px;
  }

  input {
    width: 50%;
    border: none;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    color: black;
    background-color: white;
  }

  button {
    cursor: pointer;
    width: 50%;
    height: 30px;
    border-radius: 10px;
    margin-top: 30px;
    margin-bottom: 10px;
    font-size: 20px;
    color: black;
    background-color: #f1cc13;
  }

  span {
    cursor: pointer;
    font-weight: bold;
    color: #f1cc13;
    margin-top: 10px;
  }
`;

export default Login;

