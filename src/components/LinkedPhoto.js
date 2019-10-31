import React from 'react'
import styled from 'styled-components'
import Shadow from './shadow'
import { MolduraTop, MolduraBottom } from './moldura'
import LinkedImage from './LinkedImage'

const Title = styled.div`
  color: var(--amber);
  font-family: var(--font2);
  font-size: 1.1em;
  line-height: 1em;
  letter-spacing: var(--lp2a);
`

const Subtitle = styled.div`
  color: var(--tapa);
  font-family: var(--font2);
  font-size: 0.8em;
  line-height: 1.2em;
  letter-spacing: var(--lp2a);
`

const LinkedPhoto = ({ imgName, title, subtitle, to }) => (
  <div style={{ paddingBottom: '1em' }}>
    <div style={{ position: 'relative', marginBottom: '.5em' }}>
      <MolduraTop />
      <LinkedImage imgName={imgName} to={to} />
      <MolduraBottom />
      <Shadow />
    </div>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </div>
)

export default LinkedPhoto
