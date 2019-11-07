import React from 'react'
import styled from 'styled-components'

import { MolduraBottom } from './moldura'

const SeparadorWrapper = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  margin: ${props => (props.noMargin ? '0' : null)};
  height: 1em;
  position: relative;
  width: ${props => props.width};
  margin: ${props => (props.center ? 'auto' : '')};
`

const Separador = props => (
  <SeparadorWrapper
    width={props.widthTotal}
    center={props.center}
    noMargin={props.noMargin}
    className={props.className}
  >
    <MolduraBottom
      sm={props.sm}
      color={props.color}
      border={props.border}
      widthBarra={props.widthBarra}
      tall={props.tall}
    />
  </SeparadorWrapper>
)

export default Separador
