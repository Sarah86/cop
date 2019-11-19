import React from 'react'
import styled from 'styled-components'
import Image from './image'

const ShadowCss = styled.div`
  webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  width: 100%;
  position: absolute;
  height: 150px;
  bottom: 0%;
  pointer-events: none;
  z-index: -1;
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    -webkit-box-shadow: 0 0 40px rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.8);
    bottom: 0px;
    width: 80%;
    height: 50%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    left: 10%;
    right: 10%;
  }
`

const ShadowWrapper = styled.div`
  width: 100%;
  position: absolute;
  height: 0px;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
`

const Shadow = () => (
  <ShadowWrapper>
    <Image imgName="sombra.png" />
  </ShadowWrapper>
)

export default Shadow
