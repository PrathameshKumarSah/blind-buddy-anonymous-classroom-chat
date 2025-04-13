import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
display: inline-block;
background-color: #ffffff;
color: #202020;
outline: none;
border: none

font-size:  0.85em; 
padding: 0.8rem 2.5rem;
border-radius:50px;
cursor:pointer;
`

const button = ({text, Link}) => {
  return (
    <Btn>
        <a href={Link} aria-label={text} target="blank">
            {text}
        </a>
    </Btn>
  )
}

export default button