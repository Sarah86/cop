import React from "react"
import styled from "styled-components"
import MediaQuery from "react-responsive"

import Layout from "../components/layout"
import { device } from "../components/device"
import SEO from "../components/seo"
import { ParagraphTitle, PaddedText } from "../components/typography"
import Photo from "../components/photo"
import { AgendaMobile, AgendaDesktop, AgendaTabelaDesktop } from "../components/agenda"
import FullWidth from "../components/fullwidth"

const StyledPaddedText = styled(PaddedText)`
  @media ${device.desktop} {
    top: 8em;
    position: absolute;
    z-index: 2;
  }
`
const PhotoWrapper = styled.div`
  .gatsby-image-wrapper {
    max-height: 340px;
  }
`

const Palestrantes = () => (
  <Layout>
    <SEO title="Agenda e Palestrantes" />
    <StyledPaddedText>
      <ParagraphTitle>agenda & palestrantes</ParagraphTitle>
    </StyledPaddedText>
    <FullWidth>
      <PhotoWrapper>
        <Photo imgName="programacao_capa.jpg" />
      </PhotoWrapper>
    </FullWidth>
    <MediaQuery maxWidth={991}>
      <AgendaMobile
        defaultActiveKeyAccordion="0"
        defaultActiveKeyTab="17.mar"
      />
    </MediaQuery>
    <MediaQuery minWidth={992}>
      <AgendaTabelaDesktop />
    </MediaQuery>
  </Layout>
) //sem efeito de fade para nao precisar limitar o tamanho

export default Palestrantes
