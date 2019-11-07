import React from 'react'

import BotaoGifMobile from '../images/bt_inscrevase_mob.gif'

const Dados = require("../data/dados.json")

const SubscribeButton = () => (
  <a href={Dados.Inscricao}>
    <img
      src={BotaoGifMobile}
      alt="Inscreva-se agora! Evento gratuito!"
      style={{ height: '32px', margin: 'auto' }}
    />
  </a>
)

export default SubscribeButton
