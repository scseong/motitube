import styled from 'styled-components';

// Slicebar.jsx
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
  padding: 130px;
  max-width: 40%;
  max-height: 50%;
  background-color: #ffcc00;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const StPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: white;
  padding: 12px;
  margin-top: 200px;
  border: 1px solid white;
  flex-direction: row;
  border-radius: 12px;
  transition: all 0.2s;
  flex-wrap: wrap;
  gap: 100px;
  &:hover {
    transform: scale(1.02);
  }
`;

export const StAvatar = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 10px;
  cursor: pointer;
  color: white;
`;

export const StContent = styled.p`
  display: flex;
  gap: 12px;
  align-items: center;
`;
export const Stusername = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
// 추천순 버튼
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
