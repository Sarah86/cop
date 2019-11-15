import React from 'react'
import { Link } from 'gatsby'
import Scrollspy from 'react-scrollspy'

import MediaQuery from 'react-responsive'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'

import { LinkedInstagramIcon, LinkedFacebookIcon, LinkedYoutubeIcon } from './social'
import './theme.css'
import { device } from './device'
import Hamburger from './hamburger'
import LogoAmarela from './logoamarela'
import LogoBranca from './logobranca'
import Shadow from './shadow'
import IsotipoCop from './isotipo'
import SubscribeButton from './subscribeButton'

import BotaoGIf from '../images/BT-INSCREVASE-GRATUITO.gif'
import Local from './location'

const Dados = require('../data/dados.json')

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
`

const StyledNavbarCollapse = styled(NavbarCollapse)`
  background-color: var(--verdecop);
  position: fixed;
  top: 0;
  bottom: 48px;
  left: 0;
  right: 0;
  @media ${device.landscapeMobile} {
    overflow-y: scroll;
  }
  @media ${device.desktop} {
    height: auto;
    padding: 0.5em;
    bottom: auto;
  }
`

const LogoWrapper = styled.div`
  max-width: ${props => props.maxWidth};
  margin-left: 1.1em;
  position: relative;
  width: 100%;
`

const StyledNav = styled(Nav)`
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  @media ${device.landscapeMobile} {
    min-height: 600px;
  }
  @media ${device.desktop} {
    justify-content: space-between;
    overflow-y: hidden;
    width: 100%;
    padding-right: 1em;
  }
`

const LinksContainer = styled.div`
  margin: 0 auto;
  list-style: none;
  text-align: center;
  width: 100%;
  a:nth-child(odd) {
    background-color: var(--blackpearl);
  }
  ul{
    margin: 0;
  }
  @media ${device.desktop} {
    display: block;
    text-align: right;
  }
`

const StyledLink = styled(Link).attrs({ activeClassName: 'active' })`
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
    &:hover,
    &:focus {
      color: var(--bunker);
      background-color: var(--amber);
    }
  }
  @media ${device.desktop} {
    color: var(--narvik);
    display: inline;
    font-size: 1.1em;
    font-weight: 400;
    letter-spacing: var(--lp2);
    padding: 0 0.3em;
    && {
      &:hover,
      &:focus {
        color: var(--amber);
        background-color: transparent;
      }
    }
  }
`
const LinksWrapper = styled.div`
  width: 100%;
  @media ${device.desktop} {
    margin-right: 1em;
  }
`
const NavbarButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1em;
  padding-left: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  @media ${device.desktop} {
    display: none;
  }
`

const StyledBarraContato = styled.div`
  font-size: 0.9em;
  text-align: center;
  font-family: var(--font1);
  a {
    color: var(--tapa);
    letter-spacing: var(--lp3);
    :hover,
    :focus {
      color: var(--amber);
    }
  }
  @media ${device.desktop} {
    display: inline-block;
  }
`

const StyledDivisor = styled.span`
  color: var(--tapa);
  padding: 0em 0.3em;
  @media ${device.desktop} {
    padding: 0em 0.5em;
  }
`

const SocialLinksContainer = props => (
  <div {...props}>
    <LinkedFacebookIcon />
    <LinkedInstagramIcon />
  </div>
)

const Divisor = () => <StyledDivisor>·</StyledDivisor>

const BarraContato = ({ email, telefone }) => (
  <StyledBarraContato>
    <a href={'mailto:' + email}>{email}</a> <a href={'tel:' + telefone}>{telefone}</a>
  </StyledBarraContato>
)

const BarraContatosDesktop = () => (
  <div className="d-none d-lg-block" style={{ textAlign: 'right' }}>
    <BarraContato email={Dados.contatoEmail} telefone={Dados.contatoTel} />
    <Divisor />
    <SocialLinksContainer
      style={{ display: 'inline-block', marginLeft: '-.5em' }}
      fontSize="1.5em"
    />
  </div>
)

const BarraContatosMobile = () => (
  <div className="d-lg-none p-2 w-100">
    <BarraContato email={Dados.contatoEmail} telefone={Dados.contatoTel} />
    <BarraContato email={Dados.imprensaEmail} telefone={Dados.imprensaTel} />
  </div>
)

const MobilePages = [
  {
    link: '/',
    nome: 'Home',
  },
  {
    link: '/#ocongresso',
    nome: 'O Congresso',
  },
  {
    link: '/agenda-e-palestrantes',
    nome: 'Agenda e Palestrantes',
  },
  {
    link: '/expositores',
    nome: 'Expositores',
  },
]

const DesktopPages = [
  {
    link: '/',
    nome: 'Home',
  },
  {
    link: '/ocongresso',
    nome: 'O Congresso',
  },
  {
    link: '/agenda-e-palestrantes',
    nome: 'Agenda e Palestrantes',
  },
  {
    link: '/expositores',
    nome: 'Expositores',
  },
]

const BotaoInscrevase = () => (
  <a href={Dados.linkInscricao} target="_blank" rel="noopener noreferrer">
    <img
      src={BotaoGIf}
      alt="Inscreva-se agora! Evento gratuito!"
      style={{ width: '195px', padding: '0', margin: '0' }}
    />
  </a>
)

const MenuDesktop = () => (
  <MediaQuery minWidth={992}>
    {DesktopPages.map(desktop => (
      <StyledLink
        to={desktop.link}
        partiallyActive={desktop.link === '/' || '' ? false : true}
        key={desktop.link}
      >
        {desktop.nome}
      </StyledLink>
    ))}
    <BarraContatosDesktop />
  </MediaQuery>
)

//Atencao: alteracores feitas de ultima hora para atender requisicoes fora do previsto, como links diferentes para a pagina congresso Mobile e Desktop. Sendo O Congresso Mobile constando na home.

class Header extends React.Component {
  state = {
    navExpanded: false,
  }

  constructor(props) {
    super(props)
    this.HamburgerButton = React.createRef()
    this.MenuMobileRef = React.createRef()
  }

  setNavExpanded = expanded => {
    this.setState({
      navExpanded: expanded,
    })
  }

  closeNav = () => {
    //console.log("close nav");
    this.setState({
      navExpanded: !this.state,
    })
    this.HamburgerButton.current.toggleButton()
  }

  render() {

    const MenuMobile = props => (
      <MediaQuery maxWidth={991}>
        <Scrollspy items={['/','ocongresso', 'hshs', 'hshs']} currentClassName="active">
          {MobilePages.map(mobile => (
            <StyledLink
              onClick={this.closeNav}
              ref={this.MenuMobileRef}
              to={mobile.link}
              key={mobile.link}
              partiallyActive={mobile.link === '/' ? false : true}
            >
              {mobile.nome}
            </StyledLink>
          ))}
          </Scrollspy>
      </MediaQuery>
    )
    return (
      <header>
        <StyledNavbar
          bg="verdecop"
          variant="dark"
          expand="lg"
          onToggle={this.setNavExpanded}
          expanded={this.state.navExpanded}
        >
          <StyledNavbarCollapse id="basic-navbar-nav">
            <StyledNav>
              <LogoWrapper maxWidth="170px" className="d-lg-none">
                <Link to="/" alt={this.props.siteTitle} title={this.props.siteTitle}>
                  <LogoBranca />
                </Link>
              </LogoWrapper>
              <LogoWrapper maxWidth="100px " className="d-none d-lg-block">
                <Link to="/" alt={this.props.siteTitle} title={this.props.siteTitle}>
                  <LogoAmarela />
                </Link>
              </LogoWrapper>
              <LinksWrapper>
                <LinksContainer>
                  <MenuDesktop />
                  <MenuMobile />
                </LinksContainer>
              </LinksWrapper>
              <BotaoInscrevase />
              <BarraContatosMobile />
              <SocialLinksContainer className="d-block d-lg-none" />
            </StyledNav>
            <Shadow />
          </StyledNavbarCollapse>
          <NavbarButtonContainer>
            <IsotipoCop />
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              style={{
                border: 'none',
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <Hamburger style={{ border: 'none' }} ref={this.HamburgerButton} />
            </Navbar.Toggle>
            <SubscribeButton />
          </NavbarButtonContainer>
        </StyledNavbar>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Congresso Internacional de Operações Policiais`,
}

export default Header
