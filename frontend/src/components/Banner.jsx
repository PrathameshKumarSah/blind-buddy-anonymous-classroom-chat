import React from 'react'
import styled from 'styled-components'

import img1 from '../assets/Nfts/bighead.svg';
import img2 from '../assets/Nfts/bighead-1.svg';
import img3 from '../assets/Nfts/bighead-2.svg';
import img4 from '../assets/Nfts/bighead-3.svg';
import img5 from '../assets/Nfts/bighead-4.svg';
import img6 from '../assets/Nfts/bighead-5.svg';
import "@fontsource/sora"

const Section = styled.section`
width: 100vw;
height: 25rem;
position: relative;
border-top: 2px solid  #202020;
border-top: 2px solid  #202020;

background-color: rgb(32, 32, 32);

display: flex;
jusfify-content: center;
align-items: center;

overflow: hidden;
`
const ImgContainer = styled.div`
width: 100%
position: absolute;
top: 50%;
left: 50%
transform: translate(-50%, -50%);

display: flex;
justify-content: center;
align-items: center;
opacity: 0.2;

img{
width: 15rem;
height: auto;
}
`
const Title = styled.h1`
font-size: 4em;
color: #ffffff;
font-family: 'Sora', sans-serif;
text-shadow: 1px 1px 2px #202020;
position: absolute;
padding: 1rem 2rem;
z-index: 10;
width: 35%;

`

const Banner = () => {
  return (
    <Section>
        <ImgContainer>
        <img src={img1} alt='Blind Buddy'/>
        <img src={img2} alt='Blind Buddy'/>
        <img src={img3} alt='Blind Buddy'/>
        <img src={img4} alt='Blind Buddy'/>
        <img src={img5} alt='Blind Buddy'/>
        <img src={img6} alt='Blind Buddy'/>
        </ImgContainer>
        <Title> Join the <br /> Blind Buddy</Title>
    </Section>
  )
}

export default Banner