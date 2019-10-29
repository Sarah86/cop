import React from "react"
import Image from "./image"
import styled from "styled-components"
import Shadow from "./shadow"
import { MolduraTop, MolduraBottom } from "./moldura"

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
  }
  
`

const Photo = ({ imgName, title, subtitle }) => (
  <div style={{ paddingBottom: "1em" }}>
    <ImageWrapper>
      <MolduraTop />
      <Image imgName={imgName} />
      <MolduraBottom />
      <Shadow />
    </ImageWrapper>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </div>
)

export default Photo
