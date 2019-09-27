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
import LogoAmarela from "./logoamarela"
import LogoBranca from "./logobranca"
import Botao from "./botao"
import Shadow from "./shadow"
import { LinkedInstagramIcon, LinkedFacebookIcon, LinkedYoutubeIcon } from "./social"
import IsotipoCop from "./isotipo"
import SubscribeButton from "./subscribeButton"


const StyledNavbar = styled(Navbar)`
&& {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: var(--firefly);
    padding: 0;
    @media ${device.desktop} {
      top: 0;
      bottom: auto;
    } 
}    
`;

const StyledNavbarCollapse = styled(NavbarCollapse)`
    background-color: var(--verdecop);
    position: fixed;
    top:0;
    bottom:52px;
    left:0;
    right:0;
    @media ${device.landscapeMobile}{
      overflow: scroll;
    }
    @media ${device.desktop}{
      height: auto;
      padding: .5em;
      bottom: auto;
    } 
`;

const LogoWrapper = styled.div`
max-width: ${props => props.maxWidth};
margin-left: 1.1em;
position: relative;
width: 100%;
`;

const StyledNav = styled(Nav)`
align-items: center;
justify-content: space-evenly;
height: 100%;
overflow-y: scroll;
@media ${device.landscapeMobile}{
  min-height: 600px;
}
@media ${device.desktop} {
  justify-content: space-between;
  overflow-y: hidden;
  width: 100%;
  padding-right: 1em;
} 
`;

const LinksContainer = styled.div`
    margin: 0 auto;
    list-style: none;
    text-align: center;
    width: 100%;
    a:nth-child(odd){
      background-color: var(--blackpearl);
    }
    @media ${device.desktop} {
      display: block;
      text-align: right;
    }
`;

const StyledLink = styled(Link).attrs({ activeClassName: "active" })`
    color: var(--tapa);
    display: block;
    font-family: TTSupermolotNeue;
    font-size: 2.2em;
    font-weight: 300;
    line-height: 1.2em;
    letter-spacing: var(--lp1);
    text-transform: lowercase;
    width: 100%;
    && {
        &:hover, &:focus {
          color: var(--bunker);
          background-color: var(--amber);
        }
     }
    @media ${device.desktop}{
      color: var(--narvik);
      display: inline;
      font-size: 1.1em;
      font-weight: 400;
      letter-spacing: var(--lp2);
      padding: 0 .3em;
      &&{
        &:hover, &:focus {
          color: var(--amber);
          background-color: transparent;
        }
      }
    }
  `;

const SocialLinksContainer = ({ className, style }) => (
  <div className={className} style={style}>
    <LinkedFacebookIcon />
    <LinkedInstagramIcon />
    <LinkedYoutubeIcon />
  </div>
);

const StyledDivisor = styled.span`
  color: var(--tapa);
  padding: 0em .3em;
  @media ${device.desktop}{
    padding: 0em .5em;
  }
`;

const Divisor = () => (
  <StyledDivisor>
    ·
  </StyledDivisor>
);


const StyledBarraContato = styled.div`
    font-size: .9em;
    text-align: center;
    font-family: var(--font1);
    a {
      color: var(--tapa);
      letter-spacing: var(--lp3);
      :hover, :focus {
        color: var(--amber);
      }
    }
    @media ${device.desktop}{
      display: inline-block;
    }
`;

const BarraContato = ({ email, telefone }) => (
  <StyledBarraContato>
    <a href={'mailto:' + email}>{email}</a> <Divisor /> <a href={'tel:' + telefone}>{telefone}</a>
  </StyledBarraContato>
);

const NavbarButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 1em;
    padding-left: 1em;
    @media ${device.desktop}{
      display:none;
    }
`;

const BarraContatosDesktop = () => (
  <div className="d-none d-lg-block" style={{ textAlign: "right" }}>
    <BarraContato email="contato@copinternacional.com" telefone="+55 49 9932 3454" /><Divisor /><SocialLinksContainer className="d-inline-block" style={{ fontSize: ".5em", marginLeft: "-.5em" }} />
  </div>
);

const BarraContatosMobile = () => (
  <div className="d-lg-none">
    <BarraContato email="contato@copinternacional.com" telefone="+55 49 9932 3454" />
    <BarraContato email="imprensa@copinternacional.com" telefone="+55 21 3434 3454" />
  </div>
);

const LinksWrapper = styled.div`
width: 100%;
@media ${device.desktop}{
  margin-right: 1em;
}
`;

const BotaoContainer = styled.div`
  @media ${device.desktop}{
    button {
      width: 100%;
    }
    span {
      font-size: .85em;
    }
  }
`;

const Header = ({ siteTitle }) => (
  <header>
    <StyledNavbar bg="verdecop" variant="dark" expand="lg">
      <StyledNavbarCollapse id="basic-navbar-nav">
        <StyledNav>
          <LogoWrapper maxWidth="170px" className="d-lg-none"><Link to="/"><LogoBranca /></Link></LogoWrapper>
          <LogoWrapper maxWidth="100px "className="d-none d-lg-block"><Link to="/"><LogoAmarela /></Link></LogoWrapper>
          <LinksWrapper>
            <LinksContainer>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/page-2/">O Congresso</StyledLink>
              <StyledLink to="/page-2/">Agenda &amp; Palestrantes</StyledLink>
              <StyledLink to="/page-2/">Expositores</StyledLink>
            </LinksContainer>
            <BarraContatosDesktop />
          </LinksWrapper>
          <BotaoContainer><Botao texto="Inscreva-se Agora!" to="/page-2/" /></BotaoContainer>
          <BarraContatosMobile />
          <SocialLinksContainer className="d-block d-lg-none" />
        </StyledNav>
      </StyledNavbarCollapse>
      <NavbarButtonContainer>
        <IsotipoCop />
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: "none" }}>
          <Hamburger style={{ border: "none" }} />
        </Navbar.Toggle>
        <SubscribeButton />
      </NavbarButtonContainer>
      <Shadow />
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
