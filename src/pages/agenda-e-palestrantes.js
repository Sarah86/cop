import React from 'react'
import MediaQuery from 'react-responsive'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { ParagraphTitle, PaddedText } from '../components/typography'
import { AgendaMobile, AgendaTabelaDesktop } from '../components/agenda'
import { AgendaEPalestrantesCarousel } from '../components/carousels'

const Palestrantes = () => (
  <Layout>
    <SEO title="Agenda e Palestrantes" />
    <PaddedText>
      <ParagraphTitle>agenda & palestrantes</ParagraphTitle>
    </PaddedText>
    <AgendaEPalestrantesCarousel />
    <MediaQuery maxWidth={991}>
      <AgendaMobile defaultActiveKeyAccordion="0" defaultActiveKeyTab="17.mar" />
    </MediaQuery>
    <MediaQuery minWidth={992}>
      <AgendaTabelaDesktop />
    </MediaQuery>
  </Layout>
) //sem efeito de fade para nao precisar limitar o tamanho

export default Palestrantes
