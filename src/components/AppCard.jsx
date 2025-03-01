import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Card = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ImageContainer = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  
  &::after {
    content: '🔍 View full image';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 0.5rem;
    transform: translateY(100%);
    transition: transform 0.3s ease;
    text-align: center;
    font-size: 0.875rem;
  }
  
  &:hover::after {
    transform: translateY(0);
  }
`;

const AppImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${ImageContainer}:hover & {
    transform: scale(1.05);
  }
`;

const FullscreenModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
  cursor: zoom-out;
`;

const FullscreenImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 0.375rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const AppName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #2d3748;
`;

const AppDescription = styled.p`
  color: #4a5568;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background-color: #e2e8f0;
  color: #4a5568;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const DemoLink = styled(Link)`
  flex: 1;
  display: inline-block;
  background-color: #3182ce;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 500;
  text-align: center;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #2c5282;
  }
`;

const ExternalLink = styled.a`
  flex: 1;
  display: inline-block;
  background-color: #4a5568;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 500;
  text-align: center;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #2d3748;
  }
`;

const DownloadLink = styled.a`
  flex-basis: 100%;
  margin-top: 0.5rem;
  display: inline-block;
  background-color: #38a169;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 500;
  text-align: center;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #2f855a;
  }
`;

function AppCard({ app }) {
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);
  
  // Determine if this is a demo app that we can link to internally
  const isDemoApp = app.id === 'weather-app' || app.id === 'task-manager';
  
  // Get the proper demo path
  const getDemoPath = () => {
    if (app.id === 'weather-app') return '/demo/weather';
    if (app.id === 'task-manager') return '/demo/taskflow';
    return '';
  };
  
  const openFullscreenImage = () => {
    setIsImageFullscreen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  const closeFullscreenImage = () => {
    setIsImageFullscreen(false);
    // Restore scrolling
    document.body.style.overflow = 'auto';
  };
  
  return (
    <>
      <Card>
        <ImageContainer onClick={openFullscreenImage}>
          <AppImage src={app.imageUrl} alt={app.name} />
        </ImageContainer>
        <CardContent>
          <AppName>{app.name}</AppName>
          <AppDescription>{app.description}</AppDescription>
          
          <TagsContainer>
            {app.technologies.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </TagsContainer>
          
          <ButtonContainer>
            {isDemoApp ? (
              <DemoLink to={getDemoPath()}>
                View Demo
              </DemoLink>
            ) : (
              <ExternalLink href={app.demoUrl} target="_blank" rel="noopener noreferrer">
                View Demo
              </ExternalLink>
            )}
            
            <ExternalLink href={app.demoUrl} target="_blank" rel="noopener noreferrer">
              Source Code
            </ExternalLink>
            
            {app.downloadUrl && (
              <DownloadLink href={app.downloadUrl} download>
                Download App
              </DownloadLink>
            )}
          </ButtonContainer>
        </CardContent>
      </Card>
      
      {isImageFullscreen && (
        <FullscreenModalOverlay onClick={closeFullscreenImage}>
          <FullscreenImage 
            src={app.imageUrl} 
            alt={app.name} 
            onClick={(e) => e.stopPropagation()} 
          />
          <CloseButton onClick={closeFullscreenImage}>×</CloseButton>
        </FullscreenModalOverlay>
      )}
    </>
  );
}

AppCard.propTypes = {
  app: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    demoUrl: PropTypes.string.isRequired,
    downloadUrl: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default AppCard; 