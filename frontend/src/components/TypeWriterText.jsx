import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import { ArrowRight } from "lucide-react";


const Title = styled.h2`
font-size: 3.4rem;
text-transform: capitalize;
width: 100%;
font-weight: 600;
color: #000000;
align-self: flex-start;
font-family: 'Sora', sans-serif;

 span{
   text-transform: uppercase;
   font-family: "Akaya Telivigala", cursive;
}
 .text-1{
 color: yellow;
 }
 .text-2{
 color: orange;
 }
 .text-3{
 color: red;
 }
`
const Titles = styled.h3`
  font-size: 1.3rem;
  font-family: "Akaya Telivigala", cursive;
  text-transform: capitalize;
  color: grey;
  font-weight: bolder;
  margin-bottom: 2rem;
  width: 90%;
  align-self: flex-start;
`


const TypeWriterText = () => {
  return (
    <>
     <>
         <Title>
         Discover a new<br></br>era of cool
         <Typewriter
         options={{
            autoStart: true,
            loop:true,
         }}
  onInit={(typewriter) => {
    typewriter.typeString(`<span class="text-1">Chat Now.</span>`)
    .pauseFor(2000)
    .deleteAll()
    .typeString(`<span class="text-2">Keep Secret.</span>`)
    .pauseFor(2000)
    .deleteAll()
    .typeString(`<span class="text-3">Ape killers!</span>`)
    .pauseFor(2000)
    .deleteAll()
    .start()
      
  }}
/>      
   
    </Title>
     </>
     <Titles>Fear To Communicate? Try something New.
      <br/>
      <a href={'/chat'} className='btn bg-blue-500 text-black px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400' style={{backgroundColor:'#fade08'}}> Chat Now 
      <ArrowRight className="size-5 text-base-content/40 text-black" /></a>
     </Titles>
     </>
  )
}

export default TypeWriterText