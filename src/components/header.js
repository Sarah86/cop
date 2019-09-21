import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Hamburger from "./hamburger"
import "./theme.css"
import { device } from "./device"
import styled from "styled-components"
import NavbarCollapse from "react-bootstrap/NavbarCollapse"
import Logo from "./logo"
import Botao from "./botao"

const StyledNavbar = styled(Navbar)`
&& {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding-left: 0;
    padding-right: 0;
}    
    @media ${device.desktop} {
      top: 0;
      bottom: auto;
    } 
`;

const StyledNavbarCollapse = styled(NavbarCollapse)`
    height: calc(100vh - 90px);
    @media ${device.desktop} {
      height: auto;
    } 
`;

const LogoWrapper = styled.div`
max-width: 200px;
background-color: white;
position: relative;
width: 100%;
`;

const StyledNav = styled(Nav)`
align-items: center;
justify-content: space-evenly;
height: 100%;
font-family: TTSupermolotNeue;
font-weight: bold;
text-transform: lowercase;
font-size: 2.2em;
letter-spacing: var(--lp1);
`;

const LinksContainer = styled.ul`
    margin: 0 auto;
    list-style: none;
    text-align: center;
    width: 100%;
`;

const StyledLink = styled(Link)`
    color: var(--tapa);
    line-height: 1.2em;
    &:nth-child(odd) li{
      background-color: var(--blackpearl);
    }
    :hover, :focus {
      text-decoration: none;
    }
    li {
      margin: 0;
    }
    li:hover, li:focus {
      color: var(--bunker);
      background-color: var(--amber);
    }
  `;

const Header = ({ siteTitle }) => (
  <header>
    <StyledNavbar bg="verdecop" variant="dark" expand="lg">
    <StyledNavbarCollapse id="basic-navbar-nav">
        <StyledNav>
          <LogoWrapper><Logo /></LogoWrapper>
          <LinksContainer>     
            <StyledLink to="/page-2/"><li>Home</li></StyledLink>
            <StyledLink to="/page-2/"><li>O Congresso</li></StyledLink>
            <StyledLink to="/page-2/"><li>Programação</li></StyledLink>
            <StyledLink to="/page-2/"><li>Palestrantes</li></StyledLink>
            <StyledLink to="/page-2/"><li>Expositores</li></StyledLink>
            <StyledLink to="/page-2/"><li>Contato</li></StyledLink>
          </LinksContainer> 
          <Botao texto="Inscreva-se Agora!" to="/page-2/" />
        </StyledNav>
      </StyledNavbarCollapse>
      <Navbar.Brand href="#home">C</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-auto" style={{ border:"none" }}>
        <Hamburger style={{ border: "none" }}/>
        </Navbar.Toggle>
      <div>C</div>
    </StyledNavbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
