import React from 'react'
import { Link } from 'gatsby'
import styled, {css} from 'styled-components'

import Image from './image'
import target from '../images/target.png'

const StyledLink = styled(Link)`
    &:hover {
        cursor: url("${target}"), cell;
        ${props => props.noYellowLayer && css
          ` 
          ${StyledImage}{
            mix-blend-mode: unset;
            opacity: 1;
          }
        `
    }
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
        ${props => props.noYellowLayer && css
          ` 
          background-color: transparent;
        `
    }
    }
`

const StyledImage = styled(Image)`
  &:hover {
    filter: grayscale(1);
    transition: all 0.3s;
    ${props => props.noYellowLayer && css
      ` 
      filter: unset;
    `
  }
`

const LinkedImage = props => (
  <StyledLink to={props.to} noYellowLayer={props.noYellowLayer}>
    <StyledImage imgName={props.imgName} className={props.className} noYellowLayer={props.noYellowLayer}/>
  </StyledLink>
)

export default LinkedImage
