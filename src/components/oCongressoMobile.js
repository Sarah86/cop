import React from 'react'
import MediaQuery from 'react-responsive'

import Image from '../components/image'
import SEO from '../components/seo'

import Botao, { InternalBotao } from '../components/botao'
import { CongressoFirstBlock, CongressoSecondBlock } from '../components/textBlocks'
import { CongressoFirstCarousel, CongressoSecondCarousel } from './carousels'
import VideoMobile from '../videos/COP-VIDEO-PROMO-QUADRADO-1080x1080-60s.mp4'
import { PaddedContentBox } from '../components/typography'
import SquareVideo from './squareVideo'

const Dados = require('../data/dados.json')

const Video = () => (
  //Aguardando video. Substituir pelo banner
  <>
    <PaddedContentBox>
      <h1 className="mb-0 mt-4">o congresso</h1>
    </PaddedContentBox>
    <SquareVideo url={VideoMobile} controls />
  </>
)

const Botoes = () => (
  <div
    className="mt-5 mb-5 d-flex flex-column justify-content-between align-items-center w-100"
    style={{ height: '9em' }}
  >
    <Botao texto="Inscreva-se Agora!" width="12em" to={Dados.linkInscricao} />
    <InternalBotao texto="Confira  a Programação" width="12em" to="/agenda-e-palestrantes" />
  </div>
)

const OCongressoMobile = props => (
  <MediaQuery maxWidth={991}>
    <SEO title="O Congresso" />
    <div id={props.id}>
      <Video />
      <Image imgName="ocongresso_composite.png" />
      <CongressoFirstBlock />
      <CongressoFirstCarousel />
      <CongressoSecondBlock />
      <CongressoSecondCarousel />
      <Botoes />
    </div>
  </MediaQuery>
)

export default OCongressoMobile
