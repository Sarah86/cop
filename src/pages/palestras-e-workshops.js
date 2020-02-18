import React from 'react'
import MediaQuery from 'react-responsive'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { ParagraphTitle, PaddedText } from '../components/typography'
import { AgendaMobile, AgendaTabelaDesktop } from '../components/agenda'
import { AgendaEPalestrantesCarousel } from '../components/carousels'
import { WorkshopsMobile, WorkshopTabelaDesktop } from '../components/workshops'

const Palestrantes = () => (
  <Layout>
    <SEO title="Palestras e Workshops" />
    <PaddedText>
      <ParagraphTitle>palestras & workshops</ParagraphTitle>
    </PaddedText>
    <AgendaEPalestrantesCarousel />
    <MediaQuery maxWidth={991}>
      <AgendaMobile defaultActiveKeyAccordion="0" defaultActiveKeyTab="17.mar" />
      <WorkshopsMobile defaultActiveKeyAccordion="0" defaultActiveKeyTab="17.mar" />
    </MediaQuery>
    <MediaQuery minWidth={992}>
      <AgendaTabelaDesktop />
      <div style={{ height: '1.5em' }}/>
      <WorkshopTabelaDesktop />
    </MediaQuery>
  </Layout>
) //sem efeito de fade para nao precisar limitar o tamanho

export default Palestrantes
