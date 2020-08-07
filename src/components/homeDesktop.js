import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'


import Botao from './botao'
import Local from './location'
import { Paragraph, ParagraphLink, ReadMore } from './typography'
import { FadeParagraphTitle } from './FadeElements'
import Image from './image'
import LinkedPhoto from './LinkedPhoto'
import LinkedShadowedImage from './LinkedShadowedImage'
import Background from './background'
import FullWidth from './fullwidth'

import { HomeImagesOCongresso } from './carousels'
import VideoTopoDesktop from './videoTopoDesktop'
import BotaoInscricao from '../components/botaoInscricao'

const Cronograma = require('../data/cronograma.json')
const dadosExpositores = require('../data/expositores.json')
const Dados = require('../data/dados.json')

const BemVindo = styled.h2`
  font-size: 3em;
  font-family: var(--font2);
  font-weight: 300;
  letter-spacing: var(--lp0);
  padding-top: 0.2em;
`

const Sublegenda = styled.span`
  font-size: 1.5em;
  font-family: var(--font2);
  font-weight: 300;
  letter-spacing: var(--lp2);
`

const ApresentadoPor = styled.div`
  display: inline-block;
  color: var(--amber);
  font-family: var(--font3);
  font-size: 1em;
  letter-spacing: var(--lp3);
  margin-top: 1em;
`

const Conselho = styled.div`
  position: absolute;
  width: 200px;
  bottom: -3em;
  z-index: 3;
  right: 1em;
`

const BoasVindas = () => {
  return (
    <div style={{ position: 'relative', paddingBottom: '3em' }}>
      <Background />
      <BemVindo>
        Bem vindo ao <br />
        Congresso Internacional de Operações Policiais
      </BemVindo>
      <Sublegenda>O maior evento para atividade policial da América Latina</Sublegenda>
      <Local fontSize="1em" iconSize="1.2em" className="text-left" />
      <ApresentadoPor>
        Orgulhosamente apresentado pelo CNCG - Conselho Nacional de Comandantes Gerais
      </ApresentadoPor>
      <Conselho>
        <Image imgName="logo_cngc.png" />
      </Conselho>
    </div>
  )
}

export const BannerTemporario = () => (
  <FullWidth>
    <Image imgName="home_temp_banner.jpg" />
  </FullWidth>
)

const CongressoPalestrantes = () => {
  const PalestranteDestaque = Cronograma.map(dia =>
    dia.atividades
      .filter(atividade => atividade.destaque === true)
      .map((atividade, i) => (
        <Col
          xs={6}
          className="pl-1 pr-1"
          key={`destaque-${i}`}
          style={{ order: `${atividade.destaqueOrdem}` }}
        >
          <LinkedPhoto
            imgName={atividade.imagem}
            title={atividade.palestrante}
            to={`/palestras-e-workshops/${atividade.slug}`}
            subtitle={atividade.qualificacao}
          />
        </Col>
      ))
  )

  return (
    <Container className="mt-5">
      <Row>
        <Col className="text-justify">
          <FadeParagraphTitle>o congresso</FadeParagraphTitle>
          <div>
            <Paragraph>
              A cidade-sede escolhida é pelo segundo ano consecutivo a belíssima{' '}
              <ParagraphLink
                href="http://www.pmf.sc.gov.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                Florianópolis
              </ParagraphLink>
              , que por sua vez abriga o moderno{' '}
              <ParagraphLink
                href="https://www.facebook.com/CentrodeEventosGovernadorLuizHenriquedaSilveira"
                target="_blank"
                rel="noopener noreferrer"
              >
                Centro de Eventos Governador Luiz Henrique da Silveira
              </ParagraphLink>
              .
            </Paragraph>
          </div>
        </Col>
        <Col className="d-flex flex-column justify-content-center">
          <HomeImagesOCongresso />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-column justify-content-between mt-5">
          <FadeParagraphTitle>palestrantes</FadeParagraphTitle>
          <Row noGutters>{PalestranteDestaque}</Row>
          <ReadMore className="align-self-end" to="/palestras-e-workshops">
            veja a programação
          </ReadMore>
        </Col>
      </Row>
    </Container>
  )
}

const Expositores = () => {
  const ThumbnailsExpositores = dadosExpositores.diamante.map((diamante, i) => (
    <Col lg={6} key={i} style={{ order: `${diamante.ordem}` }}>
      <LinkedShadowedImage imgName={diamante.thumbnail} to="/expositores" />
    </Col>
  ))

  return (
    <Container className="mt-5 d-flex flex-column justify-content-between position-relative">
      <Background />
      <Row>
        <Col className="mt-5 pt-5">
          <FadeParagraphTitle>expositores</FadeParagraphTitle>
          <Paragraph>
            Durante os 3 dias de evento, as maiores marcas do Brasil e do mundo em segurança e
            defesa estarão expondo seus produtos e soluções.
          </Paragraph>
          <Paragraph>
            Será uma oportunidade única de se atualizar e se conectar con o que há de melhor e mais
            moderno no segmento.
          </Paragraph>
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <Botao
            texto="QUER EXPOR A SUA MARCA?"
            borderWidth="8px"
            width="12em"
            to={`mailto:${Dados.marketingEmail}`}
          ></Botao>
        </Col>
      </Row>
      <Row noGutters className="mb-4">
        {ThumbnailsExpositores}
      </Row>
      <ReadMore className="align-self-end" to="/expositores">
        veja todos
      </ReadMore>
    </Container>
  )
}

export const Espaco = ({ widthTitle, styleSeparador, styleWordBreak }) => {
  return (
    <Container className="mt-5 d-flex flex-column justify-content-between position-relative">
      <Background left="-45%" position="left top" />
      <Row className="pt-5">
        <Col>
          <FadeParagraphTitle size="2.5em" width="3.5em">
            4º enpoe 2021
          </FadeParagraphTitle>
          <LinkedPhoto imgName="Cover-Cop-Video-Enpoe.jpg" to="/palestras-e-workshops" />
        </Col>
        <div style={styleSeparador} />
        <Col>
          <FadeParagraphTitle size="2.5em" width={widthTitle}>
            certificação <span style={styleWordBreak} />
            nacional de cão de polícia
          </FadeParagraphTitle>
          <LinkedPhoto imgName="Cover-Cop-Video-Canil.jpg" to="/palestras-e-workshops" />
        </Col>
      </Row>
    </Container>
  )
}

const HomeDesktop = () => {
  const [isBoasVindasLoaded, setIsBoasVindasLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsBoasVindasLoaded(true)
    }, 100)
  })

  return (
    <>
      {isBoasVindasLoaded ? (
        <>
          <BoasVindas />
          <VideoTopoDesktop />
          <CongressoPalestrantes />
          <BotaoInscricao />
          <Expositores />
          <Espaco />
        </>
      ) : (
        <BoasVindas />
      )}
    </>
  )
}

export default HomeDesktop
