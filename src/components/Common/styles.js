import styled from 'styled-components';

export const StHeader = styled.header`
  display: flex;
  align-items: center;
  height: ${(props) => props.theme.headerHeight};
  background-color: ${(props) => props.theme.primaryColor};
  color: black;
`;

export const StMain = styled.main`
  min-height: ${(props) => props.theme.mainHeight};
`;
