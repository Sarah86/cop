import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { Container, Row, Col } from 'react-bootstrap'

import Botao from './botao'
import Local from './location'
import { MolduraTop, MolduraBottom } from './moldura'
import Shadow from './shadow'
import { Paragraph, ParagraphLink, ReadMore } from './typography'
import { FadeParagraphTitle } from './FadeElements'
import Image from './image'
import LinkedPhoto from './LinkedPhoto'
import LinkedShadowedImage from './LinkedShadowedImage'
import Background from './background'
import FullWidth from './fullwidth'
import Photo from './photo'
import VideoDesktop from '../videos/COP-VIDEO-PROMO-FULL-HD-1920x1080-60s.mp4'

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

const VideoContainer = styled.div`
  background-color: var(--firefly);
  display: flex;
  justify-content: center;
  padding-bottom: 0.21em;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
`

const BoasVindas = () => (
  <div style={{ position: 'relative', paddingBottom: '3em' }}>
    <Background />
    <BemVindo>
      Bem vindo ao <br />
      Congresso Internacional de Operações Policiais
    </BemVindo>
    <Sublegenda>O maior evento de segurança e defesa da América Latina</Sublegenda>
    <Local fontSize="1em" iconSize="1.2em" className="text-left" />
    <ApresentadoPor>
      Orgulhosamente apresentado pelo CNGC - Conselho Nacional de Comandantes Gerais
    </ApresentadoPor>
    <Conselho>
      <Image imgName="logo_cngc.png" />
    </Conselho>
  </div>
)

const Video = () => (
  <VideoContainer>
    <div style={{ position: 'relative' }}>
      <MolduraTop />
      <ReactPlayer url={VideoDesktop} controls width="910px" height="100%" />
      <MolduraBottom />
      <Shadow />
    </div>
  </VideoContainer>
)

export const BannerTemporario = () => (
  <FullWidth>
    <Image imgName="home_temp_banner.jpg" />
  </FullWidth>
)

const CongressoPalestrantes = () => {
  const PalestranteDestaque = Cronograma.map((dia, i) => (
    <>
      {dia.atividades
        .filter(atividade => atividade.destaque === true)
        .map((atividade, i) => (
          <Col
            xs={6}
            className="pl-1 pr-1"
            key={atividade.destaqueOrdem}
            style={{ order: `${atividade.destaqueOrdem}` }}
          >
            <LinkedPhoto
              imgName={atividade.imagem}
              title={atividade.palestrante}
              to={`/agenda-e-palestrantes/${atividade.slug}`}
            />
          </Col>
        ))}
    </>
  ))

  return (
    <Container className="mt-5">
      <Row>
        <Col className="text-justify">
          <FadeParagraphTitle>o congresso</FadeParagraphTitle>
          <div>
            <Paragraph>
              Autoridades nacionais e internacionais, agentes de segurança pública, as principais
              marcas do setor, e a sociedade civil. Em contato direto por 3 dias.
            </Paragraph>
            <Paragraph>
              Depois do sucesso absoluto da estreia em 2018 o Congresso de Operações Policiais
              retorna mais abrangente, inclusivo, dinâmico, informativo e tecnológico.
            </Paragraph>
            <Paragraph>
              Congresso se realizará de forma gratuita nos dias 17, 18 e 19 de Março de 2019 para um
              público diário de aproximadamente 2000 pessoas..
            </Paragraph>
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
          <ReadMore to="/ocongresso">leia mais</ReadMore>
        </Col>
        <Col>
          <div>
            <Image imgName="logo_cop_isotipo.png" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-column justify-content-between mt-5">
          <FadeParagraphTitle>palestrantes</FadeParagraphTitle>
          <Row noGutters>{PalestranteDestaque}</Row>
          <ReadMore className="align-self-end" to="/agenda-e-palestrantes">
            conheça todos os palestrantes
          </ReadMore>
        </Col>
      </Row>
    </Container>
  )
}

//Funcao para gerar randomicamente os thumbnails. Substituido por ordem especifica
// function getRandom(arr, n) {
//   var result = new Array(n),
//     len = arr.length,
//     taken = new Array(len)
//   if (n > len) throw new RangeError('getRandom: more elements taken than available')
//   while (n--) {
//     var x = Math.floor(Math.random() * len)
//     result[n] = arr[x in taken ? taken[x] : x]
//     taken[x] = --len in taken ? taken[len] : len
//   }
//   return result
// }

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
            defesa exporão seus produtos e soluções.
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

const Espaco = () => (
  <Container className="mt-5 d-flex flex-column justify-content-between position-relative">
    <Background left="-45%" position="left top" />
    <Row className="pt-5">
      <Col>
        <FadeParagraphTitle size="2.5em" width="3.5em">
          4º enpoe 2020
        </FadeParagraphTitle>
        <LinkedPhoto imgName="destaque_triplo_home_1.jpg" to="/ocongresso/" />
        <Paragraph>
          O 4º Encontro Nacional de Profissionais de Operações especiais (4º ENPOE - 2020)
          acontecerá no COP Internacional nos dias 17, 18 e 19 de março de 2020, em
          Florianópolis-SC.
        </Paragraph>
        <ReadMore className="align-self-end" to="/ocongresso/">
          leia mais
        </ReadMore>
      </Col>
      {/* <Col>
        <FadeParagraphTitle size="2.5em" width="5em">
          reunião técnica de fronteiras
        </FadeParagraphTitle>
        <Photo imgName="destaque_triplo_home_2.jpg" />
        <Paragraph>
        O COP 2020 receberá também a Reunião Técnica da Coordenadoria Geral de fronteiras da Secretaria de Op. Integradas do Ministério da Justiça e Segurança Pública.
        </Paragraph>
      </Col> */}
      <Col>
        <FadeParagraphTitle size="2.5em" width="3.65em">
          clínicas &  workshops
        </FadeParagraphTitle>
        <Photo imgName="destaque_triplo_home_3.jpg" />
        <Paragraph>
          Durante os dias de COP serão oferecidas clínicas e workshops que abordarão assuntos de
          grande relevância tanto para o agente de segurança pública quanto para o cidadão civil.
        </Paragraph>
      </Col>
    </Row>
  </Container>
)

const HomeDesktop = () => (
  <>
    <BoasVindas />
    <Video />
    <CongressoPalestrantes />
    <Expositores />
    <Espaco />
  </>
)

export default HomeDesktop
