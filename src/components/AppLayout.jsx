import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import AppGallery from './AppGallery';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f7fafc;
`;

const Footer = styled.footer`
  background-color: #1a202c;
  color: white;
  text-align: center;
  padding: 2rem 0;
  margin-top: 2rem;
`;

function AppLayout() {
  return (
    <AppContainer>
      <Header />
      <AppGallery />
      <Footer>
        <p>&copy; {new Date().getFullYear()} Rostam's Digital Atelier. All rights reserved.</p>
      </Footer>
    </AppContainer>
  );
}

export default AppLayout; 