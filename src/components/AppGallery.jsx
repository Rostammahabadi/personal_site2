import React from 'react';
import styled from '@emotion/styled';
import AppCard from './AppCard';
import { appsData } from '../data/appsData';

const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

function AppGallery() {
  return (
    <GalleryContainer>
      <GalleryGrid>
        {appsData.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </GalleryGrid>
    </GalleryContainer>
  );
}

export default AppGallery; 