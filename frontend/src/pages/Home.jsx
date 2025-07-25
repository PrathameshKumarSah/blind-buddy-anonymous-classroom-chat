import React from 'react'
// import styles from "../style";
// import video1 from "../assets/video1.mp4";
// import video2 from "../assets/video2.mp4";
import './Home.css'
import "@fontsource/akaya-telivigala"
import "@fontsource/sora"
import styled from 'styled-components'
import TypeWriterText from '../components/TypeWriterText'
import CoverVideo from '../components/CoverVideo'
import Slice from '../components/Slice'
// import Roadmap from '../components/sections/Roadmap'
import Showcase from '../components/sections/Showcase'
import Team from '../components/sections/Team'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import Menu from '../components/Menu/Menu'
import { useState } from 'react'

const Section = styled.section`
  min-height: 100vh;
  width: 90vw;
  margin: auto;
  position: relative;
  background-color: white;

  @media (max-width: 768px) {
    width: 100vw;
    padding: 1rem;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
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
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;


function Home () {
  const[clicked,isClicked] = useState(false)
  return (
    <div>
      <Navbar clicked={clicked} isClicked={isClicked}/>
      {clicked?<Menu/>:null}
       <Section>
        <Container>
          
         <Box> <div className='hello'><TypeWriterText /></div></Box>
         <Box><div><CoverVideo /></div></Box>
       
         
        </Container>
        </Section>
        <div><Slice /></div>
        <div><Showcase /></div>
        <div><Team /></div>
        <div><Footer /></div>
    </div>
    
  )
}

export default Home