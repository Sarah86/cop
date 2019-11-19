import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

import { MolduraTop, MolduraBottom } from '../components/moldura'
import Shadow from '../components/shadow'

const SquareVideoReactPlayer = styled(ReactPlayer)`
  position: absolute;
  video {
    object-fit: cover;
  }
`

const SquareVideo = props => (
  <div style={{ position: 'relative', width: '100%', height: '100vw' }}>
    <MolduraTop />
    <SquareVideoReactPlayer {...props} width="100%" height="100%" />
    <MolduraBottom />
    <Shadow />
  </div>
)

export default SquareVideo
