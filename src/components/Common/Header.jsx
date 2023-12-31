import React from 'react';
import {
  StHeader,
  StLogo,
  StBtnInputWrapper,
  Stbutton,
  SearchContainer,
  SearchInput,
  SearchImage
} from './styles';
import logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/modules/authSlice';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.authSlice.isLogin);

  return (
    <StHeader>
      <Link to="/">
        <StLogo type="logo" src={logo} />
      </Link>
      <StBtnInputWrapper>
        <Stbutton>
          {isLogin ? (
            <>
              <Link to="/profile">
                <button>마이페이지</button>
              </Link>
              <Link to="/Write">
                <button>게시물 올리기</button>
              </Link>
              <button
                onClick={() => {
                  alert('정말 로그아웃 하시겠습니까?');
                  dispatch(logout());
                  navigate('/');
                }}
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link to="/register">
                <button>회원가입</button>
              </Link>
              <Link to="/login">
                <button>로그인</button>
              </Link>
            </>
          )}
        </Stbutton>
        <SearchContainer>
          <SearchInput type="text" placeholder="검색어 입력" />
          <SearchImage src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" />
        </SearchContainer>
      </StBtnInputWrapper>
    </StHeader>
  );
}

