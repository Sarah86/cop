import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'

import Layout from '../layouts/index'
import Image from '../components/image'
import { PaddedContentBox, Paragraph, ListOl, PaddedText, ReadMore } from '../components/typography'
import Photo from '../components/photo'
import LinkedPhoto from '../components/LinkedPhoto'
import FramedVideo from '../components/framedVideo'
import Botao from '../components/botao'
import Background from '../components/background'
import FullWidth from '../components/fullwidth'
import Separador from '../components/separador'
import { FadeParagraphTitle } from '../components/FadeElements'
import LinkedImage from '../components/LinkedImage'
import { CongressoFirstBlock, CongressoSecondBlock } from '../components/textBlocks'
import OCongressoMobile from '../components/oCongressoMobile'
import PageTransition from 'gatsby-plugin-page-transitions';


const Dados = require('../data/dados.json')
const Cronograma = require('../data/cronograma.json')

const FullWidthInscricao = styled(FullWidth)`
  background-color: var(--amber);
  text-align: center;
  padding: 1.5em;
  margin-top: 1.5em;
`

const Video = () => (
  //Aguardando video. Substituir pelo banner
  <>
    <PaddedContentBox>
      <h1>o congresso</h1>
    </PaddedContentBox>
    <FramedVideo
      url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      controls
      width="100%"
      height="100%"
    />
  </>
)

// Desktop

const OCongressoDesktopFirstBlock = () => (
  <>
    <Container style={{ position: 'relative' }}>
      <Background />
      <Row>
        <Col className="pt-5">
          <CongressoFirstBlock />
        </Col>
        <Col>
          <Image imgName="ocongresso_composite.png" />
        </Col>
      </Row>
    </Container>
    <FullWidthInscricao>
      <Botao
        inverted
        texto="Inscreva-se Agora!"
        width="19em"
        fontSize="2em"
        borderWidth="9px"
        padding="1em"
        to={Dados.linkInscricao}
      />
    </FullWidthInscricao>
  </>
)

const TemasInteresse = () => (
  <PaddedContentBox>
    <FadeParagraphTitle sm>temas de interesse</FadeParagraphTitle>
    <ListOl>
      <li>Operações de Choque;</li>
      <li>Operações Especiais;</li>
      <li>Operações de Fronteiras;</li>
      <li>Tiro Policiais - Sniper;</li>
      <li>Proteção Dignatário;</li>
      <li>Sistema Prisional;</li>
      <li>Operações de Inteligência;</li>
      <li>Operações Integradas Promotoria e Judiciário;</li>
      <li>Tecnologia aplicada a operações policiais;</li>
      <li>Licitações Internacionais;</li>
      <li>Operações Policiais em outros países.</li>
    </ListOl>
  </PaddedContentBox>
)

const OCongressoDesktopSecondBlock = () => (
  <div className="mt-5">
    <Photo imgName="ocongresso_auditorio.jpg" />
    <Container style={{ position: 'relative' }}>
      <Background position="left top" left="-40%" />
      <Row>
        <Col>
          <CongressoSecondBlock />
        </Col>
        <Col>
          <TemasInteresse />
        </Col>
      </Row>
    </Container>
  </div>
)

const OCongressoDesktopThirdBlock = () => (
  <Container className="mt-5">
    <Row>
      <Col className="text-justify d-flex flex-column">
        <Photo imgName="ocongresso_foto_abopesp.jpg" />
        <FadeParagraphTitle sm>espaço ABOpEsp</FadeParagraphTitle>
        <div className="d-flex flex-column justify-content-between flex-grow-1">
          <PaddedText>
            <Paragraph>
              As unidades de operações especiais terão{' '}
              <strong>um espaço exclusivo para proporcionar trocas e aproximar doutrinas</strong>{' '}
              entre agentes das diferentes esferas e membros da segurança pública.
            </Paragraph>
            <Paragraph>
              A Associação Brasileira de Operações Especiais (ABOPESP) vai disponibilizar um estande
              no anfiteatro do Centro de Eventos Luiz Henrique da Silveira, com uma programação de
              clínicas e workshops para quem leva a atividade policial como um ofício de excelência.
            </Paragraph>
            <LinkedImage
              imgName="ocongresso_logos_sociais_abopesp.png"
              to="https://abopesp.com.br/"
              className="w-50"
              noyellowlayer
            />
          </PaddedText>
          <Separador sm widthTotal="100px" />
        </div>
      </Col>
      <Col className="text-justify d-flex flex-column">
        <Photo imgName="ocongresso_foto_social.jpg" />
        <FadeParagraphTitle sm>ações sociais</FadeParagraphTitle>
        <div className="d-flex flex-column justify-content-between flex-grow-1">
          <PaddedText>
            <Paragraph>
              O COP Internacional fará a coleta de alimentos não-perecíveis durante os 3 dias de
              evento.
            </Paragraph>
            <Paragraph>
              Então ao participar do congresso você estará automaticamente ajudando duas
              instituições filantrópicas da cidade-sede do evento: A Igreja Bola de Neve e o SEOVE
              Caridade.
            </Paragraph>
            <Paragraph>
              <strong>A meta de arrecadação é de 4 toneladas de alimentos.</strong> Faça parte deste
              movimento!
            </Paragraph>
            <div className="d-flex justify-content-between" style={{ width: '35%' }}>
              <LinkedImage
                imgName="ocongresso_logos_sociais_seove.png"
                to="http://seove.org.br/"
                className="mx-1"
                noyellowlayer
              />
              <LinkedImage
                imgName="ocongresso_logos_sociais_boladeneve.png"
                to="http://www.boladeneve.com/"
                className="mx-1"
                noyellowlayer
              />
            </div>
          </PaddedText>
          <Separador sm widthTotal="100px" />
        </div>
      </Col>
    </Row>
  </Container>
)

const OCongressoDesktopForthBlock = () => {
  const PalestranteContainer = Cronograma.slice(0, 8).map(dia => (
    <>
      {dia.atividades.map(atividade => (
        <>
          {atividade.palestrante ? (
            <Col lg={3} className="p-1">
              <LinkedPhoto
                key={atividade.slug}
                imgName={atividade.imagem}
                title={atividade.palestrante}
                subtitle={atividade.qualificacao}
                to={`/agenda-e-palestrantes/${atividade.slug}`}
              />
            </Col>
          ) : null}
        </>
      ))}
    </>
  ))
  return (
    <Container className="mt-5 position-relative">
      <Background />
      <FadeParagraphTitle>palestrantes</FadeParagraphTitle>
      <Row noGutters>{PalestranteContainer}</Row>
      <ReadMore className="align-self-end" to="/agenda-e-palestrantes">
        veja a programação
      </ReadMore>
    </Container>
  )
}

const OCongressoDesktop = () => (
  <MediaQuery minWidth={992}>
    <OCongressoDesktopFirstBlock />
    <OCongressoDesktopSecondBlock />
    <Separador center sm widthTotal="80%" />
    <OCongressoDesktopThirdBlock />
    <OCongressoDesktopForthBlock />
  </MediaQuery>
)


const OCongresso = () => (
    <Layout>
        <OCongressoMobile />
        <OCongressoDesktop />
    </Layout>
)


export default OCongresso

//Por pedido do cliente, foi removido o conteudo do Congresso Mobile e alocado na home, index.js
