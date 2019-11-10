import React from 'react'
import '@babel/polyfill'
import styled from 'styled-components'

import LogoBranca from './logobranca'
import Botao from './botao'
import { Paragraph } from './typography'
import CNCGLogo from '../images/CNCG.png'
import Video from './bgvideo'
import Local from './location'
import { navigate } from '@reach/router'

import BackgroundVideo from "../videos/video-home-mobile.mp4"

const Dados = require('../data/dados.json')

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 85px);
  justify-content: space-evenly;
  align-items: center;
`

const LogoConselho = styled.img`
  height: 3em;
  display: block;
  margin: 0 auto;
`

const ConselhoNacional = () => (
  <>
    <LogoConselho src={CNCGLogo} alt="Conselho Nacional de Comandantes Gerais PM/CBM" />
    <Paragraph className="text-center">
      Conselho Nacional <br />
      de Comandantes Gerais PM/CBM apresenta:
    </Paragraph>
  </>
)

class HomeMobile extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
    this.handleFooterLoad();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    if (window.location.pathname === '/' || null) {
      setTimeout(function() {
        console.log('redirection to ocongresso')
        navigate(`/ocongresso/`)
      }, 1000)
    }
  }

  handleFooterLoad() {
    if ((window.location.pathname === '/' || null) && (window.matchMedia("(max-width: 991px)").matches)) {
        document.querySelector("footer").classList.add("d-none");
        console.log("ocultando footer");
    }
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onScroll={this.handleScroll}>
        <Video url={BackgroundVideo} />
        <HomeContainer>
          <ConselhoNacional />
          <div style={{ width: '65vw' }}>
            <LogoBranca />
          </div>
          <Local fontSize="0.95em" style={{ height: 'auto', textAlign: 'center' }} />
          <Botao texto="Inscreva-se Agora!" background="transparent" to={Dados.linkInscricao} />
        </HomeContainer>
      </div>
    )
  }
}

export default HomeMobile
