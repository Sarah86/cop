import React from 'react'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { FadeParagraphTitle } from '../components/FadeElements'
import { Paragraph, ParagraphLink } from '../components/typography'
import Separador from '../components/separador'
import { Container, Col, Row } from 'react-bootstrap'
import Botao from '../components/botao'
import Background from '../components/background'
import { device } from '../components/device'
import ShadowedImage from '../components/shadowedimage'
import LinkedImage from '../components/LinkedImage'
import LinkedShadowedImage from '../components/LinkedShadowedImage'

const Expositores = require('../data/expositores.json')
const Dados = require('../data/dados.json')

const ExpositoresIntroduction = () => (
  <Container>
    <FadeParagraphTitle>expositores</FadeParagraphTitle>
    <Row>
      <Col>
        <Paragraph>
          Durante os 3 dias de evento, as maiores marcas do Brasil e do mundo em segurança e defesa estarão expondo seus produtos e soluções.
        </Paragraph>
        <Paragraph>
          Será uma oportunidade única de se atualizar e se conectar com o que há de melhor e mais
          moderno no seguimento.
        </Paragraph>

        <Paragraph>
          Downloads:
          <br />
          <br />
          <ParagraphLink href={Dados.manualmarca}>Manual de Uso da Marca COP</ParagraphLink> ·{' '}
          <ParagraphLink href={Dados.manualexpositor}>Manual do Expositor</ParagraphLink>
        </Paragraph>
      </Col>
      <Col className="d-flex justify-content-center">
        <Botao texto="QUER EXPOR SUA MARCA?" to={`mailto:${Dados.marketingEmail}`} />
      </Col>
    </Row>
  </Container>
)

const ExpositoresCategoryH3 = styled.h3`
  color: ${props => props.color};
  font-family: 'TTSupermolotNeue';
  font-size: ${props => props.fontSizeSubtitulo};
  margin-bottom: 0.1em;
  margin-top: -0.1em;
  letter-spacing: var(--lp1);
  @media ${device.desktop} {
    display: inline-block;
    font-size: 2.1em;
    font-weight: 600;
  }
`

const StyledFadeParagraphTitle = styled(FadeParagraphTitle)`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  margin-bottom: 0;
  @media ${device.desktop} {
    font-size: 2.1em;
    display: inline-block;
  }
`
const ColDiamante = styled(Col)`
  border: 0.5px solid var(--bunker);
  display: flex;
  flex-direction: column;
`

const DiamanteBox = styled.div`
  background-color: var(--blackpearl);
  padding: 2em;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
`
const TitleWrapper = styled.div`
  padding: 1.5em;
  @media ${device.desktop} {
    padding-left: 0;
  }
`
const ExpositoresCategory = props => (
  <TitleWrapper>
    <StyledFadeParagraphTitle color={props.color} fontSize={props.fontSize}>
      expositores
    </StyledFadeParagraphTitle>
    <ExpositoresCategoryH3 color={props.color} fontSizeSubtitulo={props.fontSizeSubtitulo}>
      {props.category}
    </ExpositoresCategoryH3>
  </TitleWrapper>
)

const ExpositoresDiamante = () => {
  const ExpositorDiamante = Expositores.diamante
    .sort((a, b) => (a.ordemThumbnailExpositores > b.ordemThumbnailExpositores ? 1 : -1))
    .map(diamante => (
      <ColDiamante sm={12} lg={6} key={diamante.nome}>
      {diamante.site ? 
        <LinkedShadowedImage imgName={diamante.thumbnail} to={diamante.site} nomargin />
      : 
        <ShadowedImage imgName={diamante.thumbnail} nomargin />
      }
        <DiamanteBox>
          <h4 style={{ fontFamily: 'TilliumWeb', fontSize: '1.2em', marginBottom: '0' }}>
            {diamante.nome}
          </h4>
          <h5
            style={{
              fontFamily: 'TilliumWeb',
              color: 'var(--tapa',
              fontSize: '.9em',
              marginBottom: '.5em',
            }}
          >
            {diamante.ramo}
          </h5>
          <Paragraph
            style={{ fontSize: '.9em', marginBottom: '1.5em' }}
            dangerouslySetInnerHTML={{ __html: `${diamante.descricao}` }}
          />
          <Separador color="var(--bunker)" sm border="1px" widthTotal="100%" nomargin />
        </DiamanteBox>
      </ColDiamante>
    ))
  return (
    <>
      <div id="diamante">
        <ExpositoresCategory fontSizeSubtitulo="2.5em" color="var(--narvik)" category="diamante" />
        <div className="d-flex justify-content-end mt-n5">
          <MediaQuery maxWidth={991}>
            <Separador color="var(--narvik)" border="1px" widthTotal="50%" />
          </MediaQuery>
        </div>
        <MediaQuery minWidth={992}>
          <Separador color="var(--blackpearl)" sm border="1px" widthTotal="35%" />
        </MediaQuery>
        <Container className="p-0">
          <Row noGutters>{ExpositorDiamante}</Row>
        </Container>
      </div>
    </>
  )
}

const StyledCol = styled(Col)`
  border: 0.5px solid var(--kidnapper);
  margin-left: -.15px;
  @media ${device.desktop} {
    border-color: var(--bunker);
  }
`
export const OuroBox = styled.div`
  padding-top: 1em;
  margin-top: -1em;
  background-color: var(--feta);
  @media ${device.desktop} {
    background: none;
  }
`
const SpacerInterBlocks = styled.div`
  padding-top: 2em;
  @media ${device.desktop} {
    margin-top: 5em;
  }
`
const ExpositoresLogos = props => {
  const ExpositorCategory = Expositores.diamante.concat(
    Expositores.ouro,
    Expositores.prata,
    Expositores.bronze
  )

  // .sort((a, b) => a.nome > b.nome ? 1 : -1)

  const Expositor = ExpositorCategory
    //.sort((a, b) => (a.local > b.local ? 1 : -1))
    .map((expositor, i) => (
      <StyledCol xs={3} lg={3} key={i}>
        <LinkedImage 
          imgName={expositor.logo} 
          href={expositor.site} 
          mixBlendColor="#EDF8F2"
          />
      </StyledCol>
    ))

  return (
    <>
       <OuroBox>
          <SpacerInterBlocks />
          <MediaQuery maxWidth={991}>
            <ExpositoresCategory
              fontSize="2.5em"
              fontSizeSubtitulo="2.5em"
              color="var(--firefly)"
            />
            <div className="d-flex justify-content-end">
              <Separador color="var(--kidnapper)" border="1px" widthTotal="50%" nomargin />
            </div>
          </MediaQuery>
          <MediaQuery minWidth={992}>
            <ExpositoresCategory
              fontSize="2.5em"
              fontSizeSubtitulo="2.5em"
              color="var(--narvik)"
            />
          </MediaQuery>
          <Container className="m-auto p-0">
            <Row noGutters className="pt-2 pb-2">
              {Expositor}
            </Row>
          </Container>
          <MediaQuery maxWidth={991}>
            <div className="d-flex justify-content-end mt-n5">
              <Separador color="var(--kidnapper)" border="1px" widthTotal="50%" />
            </div>
          </MediaQuery>
        </OuroBox>
    </>
  )
}

const ExpositoresPage = () => (
  <Layout>
    <SEO title="Expositores" />
    <Background left="-20%" top="0" size="50%" />
    <MediaQuery minWidth={992}>
      <ExpositoresIntroduction />
    </MediaQuery>
    <ExpositoresDiamante />
    <ExpositoresLogos />
  </Layout>
)

export default ExpositoresPage
