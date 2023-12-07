import React from 'react';
import styled from 'styled-components';

export default function Sidebar() {
  return (
    <StSidebar>
      <ul>
        <li>정보</li>
      </ul>
    </StSidebar>
  );
}

const StSidebar = styled.div`
  padding: 1rem;
  height: fit-content;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
`;
