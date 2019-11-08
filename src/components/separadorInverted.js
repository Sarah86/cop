import React from 'react'
import styled, { css } from 'styled-components'

import { MolduraTop } from './moldura'

const SeparadorWrapper = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  margin: ${props => (props.nomargin ? '0' : null)};
  height: 1em;
  position: relative;
  width: ${props => props.width};
  margin: ${props => (props.center ? 'auto' : '')};

  ${props =>
    props.translated &&
    css`
      transform: rotateY(180deg);
    `}
`

const SeparadorInverted = props => (
  <SeparadorWrapper
    width={props.widthTotal}
    center={props.center}
    nomargin={props.nomargin}
    translated={props.translated}
    className={props.className}
    style={props.style}
  >
    <MolduraTop
      sm={props.sm}
      color={props.color}
      border={props.border}
      widthBarra={props.widthBarra}
      tall={props.tall}
    />
  </SeparadorWrapper>
)

export default SeparadorInverted
