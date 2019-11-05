import React from 'react'
import styled, {css} from 'styled-components'
import { device } from './device'

const BorderTop = styled.div`
  background-color: var(--firefly);
  background-color: ${props => props.color};
  width: 100%;
  height: ${props => (props.sm ? '1px' : '.6%')};
  height: ${props => props.border};
  position: absolute;
  top: 0;
  z-index: 2;
`

const BarraTop = styled.div`
  background-color: var(--firefly);
  background-color: ${props => props.color};
  height: 4px;
  width: 30%;
  width: ${props => props.widthBarra};
  left: -1.5px;
  position: absolute;
  transform: skewX(-50deg);
  z-index: 2;
  :before {
    content: '';
    background-color: var(--firefly);
    background-color: ${props => props.color};
    position: absolute;
    left: -4.1%;
    top: 0;
    height: 100%;
    width: 20px;
    transform: skewX(50deg);
  }
  @media ${device.desktop} {
    height: 3%;
    left: 1.2%;
    top: 0;
    ${props => props.sm && css `
    height: 5px;
    width: 30px;
  `}
    ${props => props.tall && css `
    height: 8px;
  `}
  }
`

export const MolduraTop = props => (
  <>
    <BorderTop sm={props.sm} color={props.color} border={props.border}/>
    <BarraTop sm={props.sm} color={props.color} widthBarra={props.widthBarra} tall={props.tall} />
  </>
)

const BorderBottom = styled.div`
  background-color: var(--firefly);
  background-color: ${props => props.color};
  width: 100%;
  height: ${props => (props.sm ? '1px' : '.6%')};
  height: ${props => props.border};
  position: absolute;
  bottom: 0;
  z-index: 1;
`

const BarraBottom = styled.div`
  background-color: var(--firefly);
  background-color: ${props => props.color};
  height: 4px;
  width: 30%;
  width: ${props => props.widthBarra};
  bottom: 0;
  right: 0;
  position: absolute;
  transform: skewX(-50deg);
  z-index: 1;
  :after {
    content: '';
    background-color: var(--firefly);
    background-color: ${props => props.color};
    position: absolute;
    right: -3%;
    bottom: 0;
    height: 100%;
    width: 20px;
    transform: skewX(50deg);
  }
  @media ${device.desktop} {
    height: 3%;
    bottom: 0;
    right: 9px;
    :after {
      right: -9px;
    }
    ${props => props.sm && css `
    height: 5px;
    width: 30px;
  `}
    ${props => props.tall && css `
    height: 8px;
  `}
  }
`

export const MolduraBottom = (props) => (
  <>
    <BarraBottom sm={props.sm} color={props.color} widthBarra={props.widthBarra} tall={props.tall}/>
    <BorderBottom sm={props.sm} color={props.color} border={props.border} />
  </>
)
