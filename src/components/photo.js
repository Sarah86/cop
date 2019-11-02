import React from 'react'
import Image from './image'
import styled from 'styled-components'
import Shadow from './shadow'
import { MolduraTop, MolduraBottom } from './moldura'

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

const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: .5em;
  margin: ${props  => props.noMargin ? "0" : null};
  }
  
`

const Container = styled.div`
  padding-bottom: 1em;
  padding:  ${props  => props.noMargin ? "0" : null};
`

const Photo = (props) => (
  <div noMargin={props.noMargin}>
    <ImageWrapper noMargin={props.noMargin}>
      <MolduraTop />
      <Image imgName={props.imgName} />
      <MolduraBottom />
      <Shadow />
    </ImageWrapper>
    <Title>{props.title}</Title>
    <Subtitle>{props.subtitle}</Subtitle>
  </div>
)

export default Photo
