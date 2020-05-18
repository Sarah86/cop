import React from 'react'
import styled from 'styled-components'
import { Infos } from './data/infos'
import { device } from './device'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const LocalTexto = styled.h2`
  color: var(--narvik);
  color: ${props => props.Color};
  font-family: var(--font3);
  font-weight: 500;
  font-size: ${props => props.fontSize};
  margin-top: 1em;
  margin-bottom: 0.5em;
  margin-right: 0.5em;

  @media ${device.desktop} {
    display: inline-block;
  }
`

const IconSize = styled.span`
  display: block;
  text-align: center;
  color: var(--narvik);
  color: ${props => props.Color};
  font-size: ${props => props.iconSize};
  padding: 0.3em;

  @media ${device.desktop} {
    display: ${props => (props.centeredIcon ? 'block' : 'inline-block')}
  
`

const Local = props => (
  <div style={props.style} className={props.className}>
    <IconSize iconSize={props.iconSize} centeredIcon={props.centeredIcon} Color={props.Color}>
      <FontAwesomeIcon icon={faMapMarkerAlt} />
    </IconSize>
    <LocalTexto fontSize={props.fontSize} Color={props.Color}>
      {Infos.dataLocal}
    </LocalTexto>
    <LocalTexto className="mt-1 d-block" Color={props.Color} fontSize={props.fontSize} as="h3">
      {Infos.location}
    </LocalTexto>
  </div>
)

export default Local
