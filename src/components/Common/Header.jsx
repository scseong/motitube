import React from 'react';
import { StHeader } from './styles';
import { logout } from 'redux/modules/Auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// console.log('Auth module:', require.resolve('redux/modules/Auth'));

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const displayName = useSelector((state) => state.auth.displayName);

  return (
    <StHeader>
      <div>
        {isLogin ? (
          <>
            <button
              onClick={() => {
                navigate('/profile');
              }}
            >
              {displayName}님의 마이페이지
            </button>
            <button
              onClick={() => {
                dispatch(logout());
              }}
            >
              로그아웃
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                navigate('/register');
              }}
            >
              회원가입
            </button>
            <button
              onClick={() => {
                navigate('/login');
              }}
            >
              로그인
            </button>
          </>
        )}
      </div>
    </StHeader>
  );
}

