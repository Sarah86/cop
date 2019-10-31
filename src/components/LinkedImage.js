import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Image from './image'
import target from '../images/target.png'

const StyledLink = styled(Link)`
    &:hover {
        cursor: url("${target}"), cell;
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
    }
`

const StyledImage = styled(Image)`
  &:hover {
    filter: grayscale(1);
    transition: all 0.3s;
  }
`

const LinkedImage = ({ imgName, to }) => (
  <StyledLink to={to}>
    <StyledImage imgName={imgName} />
  </StyledLink>
)

export default LinkedImage
