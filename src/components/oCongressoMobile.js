import React from 'react'
import MediaQuery from 'react-responsive'

import Image from '../components/image'
import SEO from '../components/seo'

import Botao, { InternalBotao } from '../components/botao'
import { CongressoFirstBlock, CongressoSecondBlock } from '../components/textBlocks'
import { CongressoFirstCarousel, CongressoSecondCarousel } from './carousels'
import { Espaco } from './homeDesktop'
import VideoTopoMobile from './videoTopoMobile'

const Dados = require('../data/dados.json')

const Botoes = () => (
  <div
    className="mt-5 mb-5 d-flex flex-column justify-content-between align-items-center w-100"
    style={{ height: '9em' }}
  >
    <Botao texto="Inscreva-se Agora!" width="12em" to={Dados.linkInscricao} />
    <InternalBotao texto="Confira  a Programação" width="12em" to="/palestras-e-workshops" />
  </div>
)

const OCongressoMobile = props => (
  <MediaQuery maxWidth={991}>
    <SEO title="O Congresso" />
    <div id={props.id}>
      <VideoTopoMobile />
      <Image imgName="ocongresso_composite.png" />
      <CongressoFirstBlock />
      <CongressoFirstCarousel />
      <CongressoSecondBlock />
      <CongressoSecondCarousel />
      <Espaco widthTitle="5.5em" styleSeparador={{ height: '2em', width: '100%' }} />
      <Botoes />
    </div>
  </MediaQuery>
)

export default OCongressoMobile
