import React from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import AppGallery from './components/AppGallery';

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

function App() {
  return (
    <AppContainer>
      <Header />
      <AppGallery />
      <Footer>
        <p>&copy; {new Date().getFullYear()} My App Gallery. All rights reserved.</p>
      </Footer>
    </AppContainer>
  );
}

export default App;
