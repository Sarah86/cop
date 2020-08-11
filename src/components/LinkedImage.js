import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

import Image from './image'
import target from '../images/target.png'

const StyledLink = styled(Link)`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
padding: ${props => props.footer ? `calc(${props.padding}/3)` : props.padding};
${props =>
  props.mixblendcolor &&
  css`
    background-color: ${props => props.mixblendcolor};
    img {
      mix-blend-mode: darken;
    }
  `}
    &:hover {
        cursor: url("${target}"), cell;
        ${props =>
          props.noyellowlayer &&
          css`
            ${StyledImage} {
              opacity: 1;
            }
          `}
    }
    &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0;
    }
    &:hover:before{
        background-color: rgba(185, 167, 112, .8);
        mix-blend-mode: color;
        opacity: 1;
        z-index: 1;
        transition: opacity 1s;
        ${props =>
          props.noyellowlayer &&
          css`
            background-color: transparent;
          `}
    }
`

export const ExternalStyledLink = styled.a`
position: relative;
display: block;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
padding: ${props => props.footer ? `calc(${props.padding}/3)` : props.padding};
${props =>
  props.mixblendcolor &&
  css`
    background-color: ${props => props.mixblendcolor};
    img {
      mix-blend-mode: darken;
    }
  `}
    &:hover {
        cursor: url("${target}"), cell;
        ${props =>
          props.noyellowlayer &&
          css`
            ${StyledImage} {
              opacity: 1;
            }
          `}
    }
    &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0;
    }
    &:hover:before{
        background-color: rgba(254,191,1,0.8);
        mix-blend-mode: color;
        opacity: 1;
        z-index: 1;
        transition: opacity 1s;
        ${props =>
          props.noyellowlayer &&
          css`
            background-color: transparent;
          `}
    }
`

const StyledImage = styled(Image)`
  &:hover {
    filter: grayscale(1);
    transition: all 0.3s;
    }
`

const InternaURL = /^https?:\/\//

const LinkedImage = props =>
  InternaURL.test(props.to) ? (
    <ExternalStyledLink
      href={props.to}
      target="_blank"
      rel="noopener noreferrer"
      noyellowlayer={props.noyellowlayer}
      mixblendcolor={props.mixblendcolor}
      padding={props.padding}
      footer={props.footer}
    >
      <StyledImage
        imgName={props.imgName}
        className={props.className}
        noyellowlayer={props.noyellowlayer}
      />
    </ExternalStyledLink>
  ) : (
    <StyledLink
      to={props.to}
      noyellowlayer={props.noyellowlayer}
      mixblendcolor={props.mixblendcolor}
      padding={props.padding}
      footer={props.footer}
    >
      <StyledImage
        imgName={props.imgName}
        className={props.className}
        noyellowlayer={props.noyellowlayer}
      />
    </StyledLink>
  )

export default LinkedImage
