import React from 'react'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { FadeParagraphTitle } from '../components/FadeElements'
import { Paragraph } from '../components/typography'
import Separador from '../components/separador'
import Image from '../components/image'
import { Container, Col, Row } from 'react-bootstrap'
import Botao from '../components/botao'
import Background from '../components/background'
import { device } from '../components/device'
import ShadowedImage from '../components/shadowedimage'

const Expositores = require('../data/expositores.json')

const ExpositoresIntroduction = () => (
  <Container>
    <FadeParagraphTitle>expositores</FadeParagraphTitle>
    <Row>
      <Col>
        <Paragraph>Durante os 3 dias de evento, a maiores marcas do Brasil e do mundo em segurança e defesa exporão seus produtos e soluções.</Paragraph>

<Paragraph>
  Será uma oportunidade única de se atualizar e se conectar com o que há de melhor e mais moderno no seguimento.
</Paragraph>

<Paragraph>
Downloads:<br/>
<br/>Manual de Uso da Marca COP  ·  Manual do Expositor  · 
</Paragraph>
      </Col>
      <Col className="d-flex justify-content-center">
        <Botao texto="QUER EXPOR SUA MARCA?" to="mailto:marketing@copinternacional.com" />
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
    justify-content: space-between;
`
const TitleWrapper = styled.div`
  padding: 1.5em;
  @media ${device.desktop} {
    padding-left: 0;
  }
`
const Local = styled.p`
  font-family: TilliumWeb;
  color: var(--lemongrass);
  font-size: 0.9em;
  font-weight: bold;
  margin-bottom: 0;
`

const Site = styled.a`
  color: var(--amber);
  font-family: TilliumWeb;
  font-size: 0.7em;
  text-decoration: underline;
  &:hover {
    color: var(--amber);
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
  const ExpositorDiamante = Expositores.diamante.sort((a, b) => a.local > b.local ? 1 : -1).map(diamante => (
    <ColDiamante sm={12} lg={6} key={diamante.nome}>
      <ShadowedImage imgName={diamante.thumbnail} nomargin />
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
        <div>
          <Local>{diamante.local}</Local>
          <Site href={`${diamante.site}`}>{diamante.site}</Site>
        </div>
        <Separador color="var(--bunker)" sm border="1px" widthTotal="100%" nomargin />
      </DiamanteBox>
    </ColDiamante>
  ))
  return (
    <>
      <div name="diamante">
        <ExpositoresCategory fontSizeSubtitulo="2.5em" color="var(--narvik)" category="diamante" />
        <div className="d-flex justify-content-end mt-n5">
          <MediaQuery maxWidth={991}>
            <Separador color="var(--narvik)" border="1px" widthTotal="50%" />
          </MediaQuery>
        </div>
        <MediaQuery minWidth={992}>
          <Separador color="var(--blackpearl)" sm border="1px" widthTotal="35%" />
        </MediaQuery>
      </div>
      <Container className="p-0">
        <Row noGutters>{ExpositorDiamante}</Row>
      </Container>
    </>
  )
}

const StyledCol = styled(Col)`
  border: 0.5px solid var(--kidnapper);
  @media ${device.desktop} {
    border-color: var(--bunker);
    background-color: var(--blackpearl);
  }
`
export const OuroBox = styled.div`
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

const OuroInfo = styled.div`
  display: none;
  @media ${device.desktop} {
    display: block;
    text-align: center;
    margin: 1.5em;
  }
`

const ExpositoresOuro = () => {
  const ExpositorOuro = Expositores.ouro.sort((a, b) => a.local > b.local ? 1 : -1).map(ouro => (
    <StyledCol xs={6} lg={3} key={ouro.nome}>
      <Image imgName={ouro.logo}/>
      <OuroInfo>
        <Local>{ouro.local}</Local>
        <Site href={`${ouro.site}`}>{ouro.site}</Site>
      </OuroInfo>
    </StyledCol>
  ))

  return (
    <>
      <OuroBox name="ouro">
        <SpacerInterBlocks />
        <MediaQuery maxWidth={991}>
          <ExpositoresCategory
            fontSize="2.5em"
            fontSizeSubtitulo="2.5em"
            color="var(--firefly)"
            category="ouro"
          />
          <div className="d-flex justify-content-end mt-n5">
            <Separador color="var(--kidnapper)" border="1px" widthTotal="50%" nomargin />
          </div>
        </MediaQuery>
        <MediaQuery minWidth={992}>
          <ExpositoresCategory
            fontSize="2.5em"
            fontSizeSubtitulo="2.5em"
            color="var(--narvik)"
            category="ouro"
          />
        </MediaQuery>
        <Container className="m-0 p-0">
          <Row noGutters className="pt-2 pb-2">
            {ExpositorOuro}
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

const ExpositoresPrata = () => {
  const ExpositorPrata = Expositores.prata.sort((a, b) => a.local > b.local ? 1 : -1).map(prata => (
    <StyledCol xs={4} lg={3} key={prata.nome}>
      <Image imgName={prata.logo} />
      <OuroInfo>
        <Local>{prata.local}</Local>
        <Site href={`${prata.site}`}>{prata.site}</Site>
      </OuroInfo>
    </StyledCol>
  ))

  return (
    <>
      <OuroBox name="prata">
        <SpacerInterBlocks />
        <MediaQuery maxWidth={991}>
          <ExpositoresCategory
            fontSize="2.5em"
            fontSizeSubtitulo="2.5em"
            color="var(--firefly)"
            category="prata"
          />
          <div className="d-flex justify-content-end mt-n5">
            <Separador color="var(--kidnapper)" border="1px" widthTotal="50%" nomargin />
          </div>
        </MediaQuery>
        <MediaQuery minWidth={992}>
          <ExpositoresCategory
            fontSize="2.5em"
            fontSizeSubtitulo="2.5em"
            color="var(--narvik)"
            category="prata"
          />
        </MediaQuery>
        <Container className="m-0 p-0">
          <Row noGutters className="pt-2 pb-2">
            {ExpositorPrata}
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

const ExpositoresBronze = () => {
  const ExpositorBronze = Expositores.bronze.sort((a, b) => a.local > b.local ? 1 : -1).map(bronze => (
    <StyledCol xs={3} lg={3} key={bronze.nome}>
      <Image imgName={bronze.logo} />
      <OuroInfo>
        <Local>{bronze.local}</Local>
        <Site href={`${bronze.site}`}>{bronze.site}</Site>
      </OuroInfo>
    </StyledCol>
  ))

  return (
    <>
      <OuroBox name="bronze">
        <SpacerInterBlocks />
        <MediaQuery maxWidth={991}>
          <ExpositoresCategory
            fontSize="2.5em"
            fontSizeSubtitulo="2.5em"
            color="var(--firefly)"
            category="bronze"
          />
          <div className="d-flex justify-content-end mt-n5">
            <Separador color="var(--kidnapper)" border="1px" widthTotal="50%" nomargin />
          </div>
        </MediaQuery>
        <MediaQuery minWidth={992}>
          <ExpositoresCategory
            fontSize="2.5em"
            fontSizeSubtitulo="2.5em"
            color="var(--narvik)"
            category="bronze"
          />
        </MediaQuery>
        <Container className="m-0 p-0">
          <Row noGutters className="pt-2 pb-2">
            {ExpositorBronze}
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
    <ExpositoresOuro />
    <ExpositoresPrata />
    <ExpositoresBronze />
  </Layout>
)

export default ExpositoresPage
