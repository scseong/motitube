import styled from 'styled-components';

export const StDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StForm = styled.form`
  border: 2px solid ${(props) => props.theme.primaryColor};
  border-radius: 15px;
  width: 700px;
  height: 450px;
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
`;
export const StButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StSelect = styled.select`
  width: 100px;
`;

export const StButton = styled.button`
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-radius: 10px;
  color: gray;
  float: right;
  cursor: pointer;
  padding: 10px;
  &:hover {
    color: white;
  }
`;

export const StInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 20px;
`;

export const StUrlTitleInput = styled.input`
  border: 2px solid ${(props) => props.theme.primaryColor};
  border-radius: 10px;
  display: flex;
  height: 50px;
  padding-left: 10px;
  color: white;
`;

export const StContentTextarea = styled.textarea`
  border: 2px solid ${(props) => props.theme.primaryColor};
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 10px;
  height: 200px;
  color: white;
`;

