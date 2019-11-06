import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import IconSubscribe from '../images/ICON-INSCREVA-SE.png'
import BotaoGifMobile from "../images/bt_inscrevase_mob.gif"


const SubscribeButton = () => (
    <a href="/">
      <img src={BotaoGifMobile} alt="Inscreva-se agora! Evento gratuito!" style={{height:"32px", margin: "auto"}}/>
    </a>
)

export default SubscribeButton
