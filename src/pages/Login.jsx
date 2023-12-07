import React, { useState } from 'react';
import { useEffect } from 'react';
import { auth } from '../shared/firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth
} from 'firebase/auth';
import styled from 'styled-components';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log("user", user); 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
      setCurrentUser(user?.email);
    });
  }, []);

  const onChange = (event) => {
    const {
      target: { name, value }
    } = event;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('user with signUp ->', userCredential.user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('error with signUp ->', errorCode, errorMessage);
    }
  };

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('user with signIn ->', userCredential.user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('error with signIn ->', errorCode, errorMessage);
    }
  };

  const logOut = async () => {
    alert('로그아웃 하시겠습니까?');
    await signOut(auth);
  };

  return (
    <>
      <>
        <div>{currentUser}</div>
        <StBtn onClick={logOut}>로그아웃</StBtn>
      </>

      <InputWrapper>
        <div>
          이메일
          <input
            type="email"
            value={email}
            name="email"
            onChange={onChange}
            placeholder="이메일을 입력해주세요"
            required
            style={{
              backgroundColor: 'white',
              color: 'black'
            }}
          ></input>
        </div>
        <div>
          비밀번호
          <input
            type="password"
            value={password}
            name="password"
            onChange={onChange}
            placeholder="비밀번호를 입력해주세요"
            required
            style={{
              backgroundColor: 'white',
              color: 'black'
            }}
          ></input>
        </div>

        <StBtn onClick={signUp}>회원가입</StBtn>
        <StBtn onClick={signIn}>로그인</StBtn>
      </InputWrapper>
    </>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StBtn = styled.button`
  background-color: #f1cc13;
  color: black;
  cursor: pointer;
  padding: 10px;
  margin-top: 10px;
`;

export default Login;

