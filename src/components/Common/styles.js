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
  background-repeat: no-repeat;
  background-position: center;
  width: 200px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    border: solid #ffcc00;
  }
`;

export const StBtnInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  gap: 50px;
`;

export const Stbutton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  cursor: pointer;
  &:hover {
    border: solid #ffcc00;
  }

  button {
    cursor: pointer;
    height: 30px;
    font-size: 14px;
    color: black;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 70px;
  padding: 10px;
`;

export const SearchInput = styled.input`
  display: flex;
  flex-direction: row;
  width: 220px;
`;

export const SearchImage = styled.img`
  width: 20px;
  height: 20px;
`;
