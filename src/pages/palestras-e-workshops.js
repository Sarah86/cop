import React from 'react'
import MediaQuery from 'react-responsive'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { ParagraphTitle, PaddedText } from '../components/typography'
import { AgendaMobile, AgendaTabelaDesktop } from '../components/agenda'
import { AgendaEPalestrantesCarousel } from '../components/carousels'
import { WorkshopsMobile, WorkshopTabelaDesktop } from '../components/workshops'
import { EnpoeTabelaDesktop, EnpoeMobile } from '../components/enpoe'

const Palestrantes = () => (
  <Layout>
    <SEO title="Programação" />
    <PaddedText>
      <ParagraphTitle>programação</ParagraphTitle>
    </PaddedText>
    <AgendaEPalestrantesCarousel />
    <MediaQuery maxWidth={991}>
      <div style={{ height: '1em' }} />
      <AgendaMobile defaultActiveKeyAccordion="0" defaultActiveKeyTab="20.abr" />
      <div style={{ height: '1em' }} />
      <WorkshopsMobile defaultActiveKeyAccordion="0" defaultActiveKeyTab="20.abr" />
      <div style={{ height: '1em' }} />
      <EnpoeMobile defaultActiveKeyAccordion="0" defaultActiveKeyTab="20.abr" />
    </MediaQuery>
    <MediaQuery minWidth={992}>
      <div style={{ height: '2em' }} />
      <AgendaTabelaDesktop />
      <div style={{ height: '2em' }} />
      <WorkshopTabelaDesktop />
      <div style={{ height: '2em' }} />
      <EnpoeTabelaDesktop />
    </MediaQuery>
  </Layout>
) //sem efeito de fade para nao precisar limitar o tamanho

export default Palestrantes
