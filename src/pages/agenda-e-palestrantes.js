import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'

import Layout from '../components/layout'
import { device } from '../components/device'
import SEO from '../components/seo'
import { ParagraphTitle, PaddedText } from '../components/typography'
import Photo from '../components/photo'
import { AgendaMobile, AgendaTabelaDesktop } from '../components/agenda'
import FullWidth from '../components/fullwidth'
import PageTransition from 'gatsby-plugin-page-transitions';
import { AgendaEPalestrantesCarousel } from '../components/carousels'



const PhotoWrapper = styled.div`
  .gatsby-image-wrapper {
    max-height: 300px;
  }
`

const Palestrantes = () => (
  <Layout>
      <SEO title="Agenda e Palestrantes" />
        <PaddedText>
        <ParagraphTitle>agenda & palestrantes</ParagraphTitle>
      </PaddedText>
      <AgendaEPalestrantesCarousel/>
      <MediaQuery maxWidth={991}>
        <AgendaMobile defaultActiveKeyAccordion="0" defaultActiveKeyTab="17.mar" />
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <AgendaTabelaDesktop />
      </MediaQuery>
  </Layout>
) //sem efeito de fade para nao precisar limitar o tamanho

export default Palestrantes
