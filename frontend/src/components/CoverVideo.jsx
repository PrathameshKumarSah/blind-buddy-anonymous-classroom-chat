import React from 'react'
import styled from 'styled-components'
import GIF from '../assets/Home Video.mp4'

const VideoContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  video {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;


const CoverVideo = () => {
  return (
    <VideoContainer>
        <video src={GIF} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  )
}

export default CoverVideo