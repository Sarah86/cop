import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

import './theme.css'

const Dados = require('../data/dados.json')

const SocialLink = styled.a`
  color: var(--tapa);
  padding: 0.4em;
  &:hover,
  &:focus {
    color: var(--amber);
  }
`

export const LinkedFacebookIcon = props => (
  <SocialLink href={Dados.facebook}>
    <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: `${props.fontSize}` }} />
  </SocialLink>
)

export const LinkedInstagramIcon = props => (
  <SocialLink href={Dados.instagram}>
    <FontAwesomeIcon icon={faInstagram} style={{ fontSize: `${props.fontSize}` }} />
  </SocialLink>
)

export const LinkedYoutubeIcon = props => (
  <SocialLink href={Dados.youtube}>
    <FontAwesomeIcon icon={faYoutube} style={{ fontSize: `${props.fontSize}` }} />
  </SocialLink>
)
