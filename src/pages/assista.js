import React from 'react'

import { Container, Col, Row } from 'react-bootstrap'
import { PaddedContentBox, Paragraph } from '../components/typography'

import FramedVideo from '../components/framedVideo'

import { FadeParagraphTitle } from '../components/FadeElements'

const Assista = () => {
  const Videos = [
    {
      url: 'https://www.youtube.com/watch?v=uYrPl1fKaK0',
      title: 'Edição anterior',
    },
    {
      url: 'https://www.youtube.com/watch?v=SZPvvIRiSrQ&t=133s',
      title: 'Institucional COP 2018',
    },
    {
      url: 'https://www.youtube.com/watch?v=deh2PEW_MTE',
      title: 'Cobertura Completa Ao Vivo',
    },
  ]
  const VideoContainer = Videos.map(video => (
    <Col xs={6}>
      <FramedVideo
        url={video.url}
        light
        width="100%"
        height="100%"
        style={{ marginBottom: '1em' }}
      />
      <Paragraph
        style={{
          textAlign: 'center',
          paddingLeft: '.5em',
          paddingRight: '.5em',
        }}
      >
        {video.title}
      </Paragraph>
    </Col>
  ))
  return (
    <>
      <PaddedContentBox>
        <FadeParagraphTitle>assista</FadeParagraphTitle>
      </PaddedContentBox>
      <Container className="p-0">
        <Row noGutters>{VideoContainer}</Row>
      </Container>
    </>
  )
}
