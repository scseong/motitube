import React, { useState } from 'react';
import { auth } from '../shared/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: '',
    nickname: '',
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
      nickname: '',
      password: ''
    });
  };

  const checkInputs = () => {
    if (
      inputs.email.trim().length === 0 ||
      inputs.password.trim().length === 0 ||
      inputs.nickname.trim().length === 0
    ) {
      toast.error('정보를 모두 입력해주세요');
      resetInputs();
      return;
    }
    if (inputs.nickname.length < 2) {
      toast.error('닉네임은 2자 이상이어야 합니다');
      resetInputs();
      return;
    }
    return true;
  };

  const errorMsg = (code) => {
    switch (code) {
      case 'auth/user-not-found' || 'auth/wrong-password':
        return '이메일 또는 비밀번호가 일치하지 않습니다';
      case 'auth/email-already-in-use':
        return '이미 사용 중인 이메일입니다';
      case 'auth/weak-password':
        return '비밀번호는 6자 이상이어야 합니다';
      case 'auth/network-request-failed':
        return '네트워크 연결에 실패 하였습니다';
      case 'auth/invalid-email':
        return '잘못된 이메일 형식입니다';
      case 'auth/internal-error':
        return '잘못된 요청입니다';
      default:
        return '로그인에 실패 했습니다';
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();

    if (!checkInputs()) {
      return;
    }

    const defaultPhotoUrl = 'https://m.ezendolls.com/web/product/big/201803/605_shop1_119071.jpg';
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
      toast.success('회원가입이 되었습니다!');
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

  const moveLoginPage = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <Wrapper>
      <Form>
        <h1>회원가입</h1>
        <input
          name="nickname"
          placeholder="닉네임을 입력하세요"
          type="text"
          value={inputs.nickname}
          onChange={changeInputs}
        />

        <input
          name="email"
          placeholder="이메일을 입력하세요"
          type="email"
          value={inputs.email}
          onChange={changeInputs}
        />

        <input
          name="password"
          placeholder="비밀번호를 입력하세요"
          type="password"
          value={inputs.password}
          onChange={changeInputs}
        />

        <button onClick={registerUser}>가입하기</button>
        <div
          style={{
            fontSize: '10px',
            marginTop: '20px'
          }}
        >
          이미 가입이 되어있다면?
        </div>
        <span onClick={moveLoginPage}>로그인 하러가기</span>
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

export default Register;

