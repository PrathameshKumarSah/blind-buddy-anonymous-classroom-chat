import React from 'react'
import styled from 'styled-components'
import Carousel from './Carousel'
import "@fontsource/akaya-telivigala"

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: #202020;
// color: #fff;
display:flex;
justify-content:center;
align-items: center;
position: relative;
`
const Container = styled.div`
width: 75%;
// min-height: 80vh;
margin: 0 auto;
// background-color: lightblue;



display: flex;
justify-content: center;
align-items: center;
`

const Box = styled.div`
width : 45%;
height: 50%;

display: flex;
flex-direction: column;
justify-contact: center;

align-items: center;
`

const Title = styled.h2`
font-size: 3.4rem;
text-transform: capitalize;
width: 80%;
 font-family: "Akaya Telivigala", cursive;
color: #ffffff;
align-self: flex-start;
margin: 0 auto;
margin-left: 100px;
`

const SubText = styled.p`
font-size: 2rem;
width: 80%;
color: #FFF6E9;
font-family: "sora", san-serif;
align-self: flex-start;
margin: 1rem auto;
margin-left: 100px;
font-weight: 400;
`

const SubTextLight = styled.p`
font-size: 1rem;
width: 80%;
color: #E5E1DA;
align-self: flex-start;
margin: 1rem auto;
margin-left: 100px;
font-weight: 400;
`

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