import React from 'react';
import { StHeader } from './styles';
import { StLogo } from './styles';
import { Stmypageheader } from './styles';
import { Stsignupheader } from './styles';
import { StProjectname } from './styles';
import { StLoginheader } from './styles';
import { SearchContainer } from './styles';
import { SearchInput } from './styles';
import { SearchImage } from './styles';
import logo from 'assets/images/logo.png';
import ProjectTitle from 'assets/images/title.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <StHeader>
      <StLogo type="logo" src={logo} />
      <Link to="/">
        <StProjectname src={ProjectTitle} />
      </Link>
      <Link to="/profile">
        <Stmypageheader>마이페이지</Stmypageheader>
      </Link>
      <Link to="/register">
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

