import React from 'react';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  background-color: #1a202c;
  color: white;
  padding: 2rem 0;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #a0aec0;
`;

function Header() {
  return (
    <HeaderContainer>
      <Title>Rostam's Digital Atelier</Title>
      <Subtitle>A curated showcase of innovative applications</Subtitle>
    </HeaderContainer>
  );
}

export default Header; 