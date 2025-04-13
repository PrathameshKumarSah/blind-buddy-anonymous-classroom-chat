import React from 'react'
import styled from 'styled-components'
import '@fontsource/sora'
import DrawSvg from '../DrawSvg'

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: #ffffff;
position: relative;
`
const Title = styled.h2`
font-size: 2.8rem;
text-transform: capitalize;
width: fit-content;
font-weight: 600;
color: #202020;
align-self: flex-start;
font-family: 'Sora', sans-serif;
justify-content: center;
margin: 1rem auto;
border-bottom: 2px solid;

`

const Container = styled.div`
width: 70%;
height: 200vh;
margin: 0 auto;
background-color: #ffffff;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Roadmap = () => {
  return (
   <Section>
    <Title>Roadmap</Title>
    <Container>
       <SvgContainer>
        <DrawSvg />
       </SvgContainer>
    </Container>
   </Section>
  )
}

export default Roadmap