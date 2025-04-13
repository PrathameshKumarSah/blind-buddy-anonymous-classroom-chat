import React from 'react'
import styled, { keyframes } from 'styled-components'

import img1 from '../../assets/Nfts/bighead.svg';
import img2 from '../../assets/Nfts/bighead-1.svg';
import img3 from '../../assets/Nfts/bighead-2.svg';
import img4 from '../../assets/Nfts/bighead-3.svg';
import img5 from '../../assets/Nfts/bighead-4.svg';
import img6 from '../../assets/Nfts/bighead-5.svg';
import img7 from '../../assets/Nfts/bighead-6.svg';
import img8 from '../../assets/Nfts/bighead-7.svg';
import img9 from '../../assets/Nfts/bighead-8.svg';
import img10 from '../../assets/Nfts/bighead-9.svg';
// import ETH from '../../assets/icons8-ethereum-48.png'


const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: #202020;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
position: relative;

`

const move = keyframes`
0%{ transform: translateX(100%)};
100%{ transform: translateX(-100%)};
`


const Row = styled.div`
// background-color: lightblue;
white-space: nowrap;
box-sizing: content-box;
margin: 2rem 0;
display: flex;

animation: ${move} 20s linear infinite ${props => props.direction};



`

const ImageContainer = styled.div`
width: 15rem;
margin: 0 1rem;
background-color: #ffffff;
border-radius: 20px;
cursor: pointer;

img{
    width: 100%;
    height: Autoplay;
}
`

const Details =styled.div`
display: flex;
justify-content: space-between;
background-color: #202020;
border: 2px solid white;

border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
font-size: 0.875em;
color: #fff;
font-weight: 600;
margin: 1px 10px;
line-height: 1.5rem;
}

h1{
font-size: 1em;
color: #ffffff;
margin: 1px 10px;
font-weight: 600;
}
`



const NftItem = ({img, number=0, price=0}) => {



    return(
        <ImageContainer > 
           <img src={img} alt="The Weirdos" />
           <Details>
             <div>
                <span>Buddy</span>
                <h1>#{number}</h1>
             </div>

             <div>
                <span>Price</span>
               
             </div>
           </Details>
        </ImageContainer>
    )
}


const Showcase = () => {

  return (
    <Section>
        <Row direction="none">
        <NftItem img={img1} number={852} price={1} />
        <NftItem img={img2} number={852} price={1} />
        <NftItem img={img3} number={852} price={1} />
        <NftItem img={img4} number={852} price={1} />
        <NftItem img={img5} number={852} price={1} />

      </Row>

      <Row direction="reverse">
      <NftItem img={img6} number={852} price={1}/>
      <NftItem img={img7} number={852} price={1} />
      <NftItem img={img8} number={852} price={1} />
      <NftItem img={img9} number={852} price={1} />
      <NftItem img={img10} number={852} price={1} />

        
      </Row>
    </Section>
  )
}

export default Showcase