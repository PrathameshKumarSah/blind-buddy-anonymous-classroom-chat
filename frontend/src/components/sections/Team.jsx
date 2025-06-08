import React from "react";
import styled from "styled-components";

import img1 from "../../assets/Nfts/bighead.svg";
import img2 from "../../assets/Nfts/bighead-1.svg";
import img3 from "../../assets/Nfts/bighead-2.svg";
import img4 from "../../assets/Nfts/bighead-3.svg";
import img5 from "../../assets/Nfts/bighead-4.svg";
import img6 from "../../assets/Nfts/bighead-5.svg";
import img7 from "../../assets/Nfts/bighead-6.svg";
import img8 from "../../assets/Nfts/bighead-7.svg";
import img9 from "../../assets/Nfts/bighead-8.svg";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  margin: 0;
  position: relative;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  text-transform: capitalize;
  width: fit-content;
  font-weight: 600;
  color: #202020;
  font-family: "Sora", sans-serif;
  margin: 1rem auto;
  border-bottom: 2px solid;
`;

const Container = styled.div`
  width: 75%;
  margin: 1.5rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    justify-items: center;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Item = styled.div`
  // width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: #ffffff;
  margin: 2rem auto;
  position: relative;

  border: 2px solid #202020;
  boder-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }
`;

const ImageContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: #eeedde;

  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
`;
const Name = styled.h2`
  font-sized: 1.25em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #202020;
  margin-top: 1rem;
`;

const MemberComponent = ({ img, name = " " }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
    </Item>
  );
};

const Team = () => {
  return (
    <Section>
      <Title>Happy User's</Title>
      <Container>
        <MemberComponent img={img3} name="Sahil Kumar" />
        <MemberComponent img={img5} name="Prathamesh" />
        <MemberComponent img={img6} name="Sahil Verma" />
        <MemberComponent img={img2} name="Vijay" />
        <MemberComponent img={img4} name="Geeta" />
        <MemberComponent img={img1} name="Aisha" />
        <MemberComponent img={img7} name="Virat" />
        <MemberComponent img={img8} name="Sachin" />
        <MemberComponent img={img9} name="Noni" />
      </Container>
    </Section>
  );
};

export default Team;
