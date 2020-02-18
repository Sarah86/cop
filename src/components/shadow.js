import React from 'react'
import styled from 'styled-components'
import Image from './image'

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
