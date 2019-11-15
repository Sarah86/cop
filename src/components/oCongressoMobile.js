import React from 'react'
import MediaQuery from 'react-responsive'

import Image from '../components/image'
import SEO from '../components/seo'

import Botao, { InternalBotao } from '../components/botao'
import { CongressoFirstBlock, CongressoSecondBlock } from '../components/textBlocks'
import { CongressoFirstCarousel, CongressoSecondCarousel } from './carousels'

const Dados = require('../data/dados.json')

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
