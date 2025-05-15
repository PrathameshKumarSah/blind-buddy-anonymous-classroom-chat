import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
// import Facebook from '../Icons/Facebook'

const Section = styled.section`
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  position: relative;
  color: #202020;
  overflow: hidden;

  display: flex;
  // justify-content: center;
  // align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const Item = styled.li`
  width: fit-content;
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;
  }

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #202020;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Footer = () => {
  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <img src={"./images/wets.png"}></img>
          <IconList>{/* <Facebook /> */}</IconList>
        </Left>
        <MenuItems>
          <Item>
            <Link to="/">Home</Link>
          </Item>
          <Item>
            <Link to="/">About</Link>
          </Item>

          <Item>
            <Link to="/">Contact</Link>
          </Item>
          <Item>
            <Link to="/login">Login/signup</Link>
          </Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Blind Buddy. All rights reserved.
        </span>
        <span>
          Made with &#10084; by{" "}
          <a
            href="https://github.com/PrathameshKumarSah/blind-buddy-anonymous-classroom-chat"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "red", textDecoration: "none" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.textDecoration = "underline")
            }
            onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
          >
            Blind Buddy
          </a>
          !
        </span>
      </Bottom>
    </Section>
  );
};

export default Footer;
