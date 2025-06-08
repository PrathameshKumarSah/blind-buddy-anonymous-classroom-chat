import React from 'react'
import styled from 'styled-components'
import Carousel from './Carousel'
import "@fontsource/akaya-telivigala"

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: #202020;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;

const Box = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: left;
  width: 100%;
  color: #ffffff;
  font-family: "Akaya Telivigala", cursive;  

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
    padding-top: 1rem;
  }
`;

const SubText = styled.p`
  font-size: 1.25rem;
  width: 100%;
  color: #fff6e9;
  font-family: "sora", sans-serif;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const SubTextLight = styled.p`
  font-size: 1rem;
  width: 100%;
  color: #e5e1da;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    display: none;
    font-size: 0.9rem;
    text-align: center;
    padding-top: 0.5rem;
  }
`;


const Slice = () => {
  return (
    <Section>
        <Container>
            <Box> <Carousel /> </Box> 
            <Box> <Title>
              Welcome To The Blind Buddy!
           </Title>
              <SubText>
                This App provide you to chat with people's and join gorups to shared your thoughts. 
              </SubText>
              <SubTextLight>
                With more than 50+ User's visit our website and enjoy Chatting.
                </SubTextLight> 
               </Box>
        </Container>
    </Section>
  )
}

export default Slice