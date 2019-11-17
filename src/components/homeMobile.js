import React from 'react'
import styled from 'styled-components'

import LogoBranca from './logobranca'
import Botao from './botao'
import { Paragraph } from './typography'
import CNCGLogo from '../images/CNCG.png'
import Video from './bgvideo'
import Local from './location'

import BackgroundVideo from '../videos/video-home-mobile.mp4'

const Dados = require('../data/dados.json')

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 115px);
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
const HomeMobile= props => {
 
    return (
      <div style={{ height: '100vh' }} id={props.id}>
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

export default HomeMobile
