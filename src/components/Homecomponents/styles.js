import styled from 'styled-components';

export const Stvideoslider = styled.div`
  padding: 60px;
  background-color: #f1cc13;
  overflow: hidden;
  margin-top: 60px;
  border-radius: 20px;
  color: black;
`;

export const StNaviBox = styled.div`
  display: flex;
  margin: 2px 30px 2px auto;
  padding: 50px;
  max-width: 100%;
  max-height: 100%;
  background-color: #ffcc00;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const StPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  color: white;
  padding: 50px;
  margin-top: 100px;
  border: 20px solid #ffcc00;
  background-color: black;
  flex-direction: row;
  border-radius: 12px;
  transition: all 0.2s;
  flex-wrap: wrap;
  gap: 10px;

  & div {
    margin: 5px;
    font-size: 15px;
    &:hover {
      transform: scale(1.06);
    }
  }
  h1 {
    text-align: center;
    font-size: 15px;
    max-width: 355px;
    color: white;
    font-weight: 700;
    margin: 10px 10px 1px 0.2px;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 7px 3px;
    border: 1px solid white;
  }
`;

export const StcardImage = styled.img`
  width: 355px;
  height: 200px;
  margin-right: 20px;
  cursor: pointer;
  color: white;
  border: 4px solid yellow;
`;

export const StContent = styled.p`
  display: flex;
  gap: 12px;
  align-items: center;
  overflow: hidden;
  max-width: 300px;
  gap: 12px;
`;
export const Stusername = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Strecommendation = styled.button`
  padding: 10px 20px;
  background-color: black;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  margin: 20px;
  cursor: pointer;
  &:hover {
    background-color: #ffcc00;
  }
`;

export const Sttimestamp = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Styoutube = styled.iframe`
  width: 560px;
  height: 315px;
`;
