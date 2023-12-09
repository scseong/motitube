import styled from 'styled-components';

export const StMain = styled.main`
  min-height: ${(props) => props.theme.mainHeight};
`;
// header.jsx
export const StHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${(props) => props.theme.headerHeight};
  background-color: ${(props) => props.theme.primaryColor};
  color: black;
`;

export const StLogo = styled.img`
  position: relative;
  background-image: url('assets/images/logo.png');
  background-size: cover;
  margin: 10px;
  width: 70px;
`;

export const StProjectname = styled.img`
  position: relative;
  background-image: url('assets/images/title.png');
  background-size: cover;
  width: 200px;
  right: 17vw;
`;

export const Stmypageheader = styled.button`
  position: absolute;
  top: 1.5vw;
  left: 60vw;
`;

export const Stsignupheader = styled.button`
  position: absolute;
  left: 67vw;
  top: 1.5vw;
`;

export const StLoginheader = styled.button`
  position: absolute;
  left: 73.5vw;
  top: 1.5vw;
`;
export const StRegister = styled.button`
  position: absolute;
  left: 54.5vw;
  top: 1.5vw;
`;

export const SearchContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  left: 80vw;
`;

export const SearchInput = styled.input`
  margin-right: 8px;
`;

export const SearchImage = styled.img`
  width: 20px;
  height: 20px;
`;
