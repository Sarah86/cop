import React from 'react'
import styled from 'styled-components'

import Botao from './botao'
import FullWidth from './fullwidth'

const Dados = require('../data/dados.json')

const FullWidthInscricao = styled(FullWidth)`
  background-color: var(--amber);
  text-align: center;
  padding: 1.5em;
  margin-top: 1.5em;
`

const BotaoInscricao = () => (
  <FullWidthInscricao>
    <Botao
      inverted
      texto="Inscreva-se Agora!"
      width="19em"
      fontSize="2em"
      borderWidth="9px"
      padding="1em"
      to={Dados.linkInscricao}
    />
  </FullWidthInscricao>
)

export default BotaoInscricao
