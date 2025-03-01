import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const NavContainer = styled.nav`
  background-color: #1a202c;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    color: #90cdf4;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: #a0aec0;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  
  &:hover {
    color: white;
  }
`;

function DemoNavBar() {
  return (
    <NavContainer>
      <Logo to="/">Rostam's Digital Atelier</Logo>
      <NavLinks>
        <NavLink to="/demo/weather">Weather App</NavLink>
        <NavLink to="/demo/taskflow">Task Manager</NavLink>
        <NavLink to="/">Back to Gallery</NavLink>
      </NavLinks>
    </NavContainer>
  );
}

export default DemoNavBar; 