import React, { useState } from 'react';
// import { useEffect } from 'react';
import { auth } from '../shared/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { onAuthStateChanged } from 'firebase/auth';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Register() {
  // const [currentUser, setCurrentUser] = useState(null);
  const [inputs, setInputs] = useState({
    email: '',
    nickname: '',
    password: ''
  });
  const navigate = useNavigate();

  // input 변경
  const changeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };

  // input 비우기
  const clearInputs = () => {
    setInputs({
      email: '',
      nickname: '',
      password: ''
    });
  };

  // 유효성 검사
  const checkInputs = () => {
    // 빈칸
    if (
      inputs.email.trim().length === 0 ||
      inputs.email.trim().length === 0 ||
      inputs.nickname.trim().length === 0
    ) {
      toast.error('정보를 모두 입력해주세요', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'colored'
      });
      clearInputs();
      return;
    }
    // 닉네임 2~6자 사이
    if (inputs.nickname.length < 2 || inputs.nickname.length > 6) {
      toast.error('닉네임은 2~6자 사이로 만들어주세요', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'colored'
      });
      clearInputs();
      return;
    }
    return true;
  };

  // 오류메시지
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
      toast.success('회원가입 성공!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'colored'
      });
      navigate('/login');
    } catch (error) {
      toast.error(errorMsg(error.code), {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'colored'
      });
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

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       // console.log("user", user); 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
//       setCurrentUser(user?.email);
//     });
//   }, []);

//   const onChange = (event) => {
//     const {
//       target: { name, value }
//     } = event;
//     if (name === 'email') {
//       setEmail(value);
//     }
//     if (name === 'password') {
//       setPassword(value);
//     }
//   };

//   const signUp = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       console.log('user with signUp ->', userCredential.user);
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log('error with signUp ->', errorCode, errorMessage);
//     }
//   };

//   const signIn = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       console.log('user with signIn ->', userCredential.user);
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log('error with signIn ->', errorCode, errorMessage);
//     }
//   };

//   const logOut = async () => {
//     alert('로그아웃 하시겠습니까?');
//     await signOut(auth);
//   };

//   return (
//     <>
//       <>
//         <div>{currentUser}</div>
//         <StBtn onClick={logOut}>로그아웃</StBtn>
//       </>

//       <InputWrapper>
//         <div>
//           이메일
//           <input
//             type="email"
//             value={email}
//             name="email"
//             onChange={onChange}
//             placeholder="이메일을 입력해주세요"
//             required
//             style={{
//               backgroundColor: 'white',
//               color: 'black'
//             }}
//           ></input>
//         </div>
//         <div>
//           비밀번호
//           <input
//             type="password"
//             value={password}
//             name="password"
//             onChange={onChange}
//             placeholder="비밀번호를 입력해주세요"
//             required
//             style={{
//               backgroundColor: 'white',
//               color: 'black'
//             }}
//           ></input>
//         </div>

//         <StBtn onClick={signUp}>회원가입</StBtn>
//         <StBtn onClick={signIn}>로그인</StBtn>
//       </InputWrapper>
//     </>
//   );
// }

// const InputWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   position: relative;
// `;

// const StBtn = styled.button`
//   background-color: #f1cc13;
//   color: black;
//   cursor: pointer;
//   padding: 10px;
//   margin-top: 10px;
// `;

