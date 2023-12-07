import React from 'react';
import {
  StHeader,
  StLogo,
  Stmypageheader,
  Stsignupheader,
  StProjectname,
  StLoginheader,
  SearchContainer,
  SearchInput,
  SearchImage
} from './styles';
import logo from 'assets/images/logo.png';
import ProjectTitle from 'assets/images/title.png';
import { Link } from 'react-router-dom';

export default function Header() {
  // 링크로 할지 네비게이션으로 할지
  return (
    <StHeader>
      <StLogo type="logo" src={logo} />
      <Link to="/">
        <StProjectname src={ProjectTitle} />
      </Link>
      <Link to="/profile">
        <Stmypageheader>마이페이지</Stmypageheader>
      </Link>
      <Link to="/signup">
        <Stsignupheader>회원가입</Stsignupheader>
      </Link>
      <Link to="/login">
        <StLoginheader>로그인</StLoginheader>
      </Link>
      <SearchContainer>
        <SearchInput type="text" placeholder="검색어 입력" />
        <SearchImage src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" />
      </SearchContainer>
    </StHeader>
  );
}
