import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 50%;
  padding: 40px;
  border-radius: 50px;
  background-color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);

  h1 {
    font-size: 30px;
    margin-bottom: 50px;
  }

  input {
    width: 50%;
    border: none;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    color: black;
    background-color: white;
  }

  button {
    cursor: pointer;
    width: 30%;
    height: 30px;
    border-radius: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    color: black;
    background-color: #f1cc13;
  }
`;
