import React from 'react'
import { Carousel, Container, Col, Row } from 'react-bootstrap'
import CarouselCaption from 'react-bootstrap/CarouselCaption'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import { MolduraTop, MolduraBottom } from '../components/moldura'
import {
  CarouselCaptionTitle,
  PaddedContentBox,
  ParagraphLink,
  ParagraphTitle,
  Paragraph,
  List,
  ListOl,
  PaddedText,
  ReadMore,
  InternalParagraphLink,
} from '../components/typography'
import Photo from '../components/photo'
import LinkedPhoto from '../components/LinkedPhoto'
import Shadow from '../components/shadow'
import FramedVideo from '../components/framedVideo'
import Botao from '../components/botao'
import Background from '../components/background'
import FullWidth from '../components/fullwidth'
import Separador from '../components/separador'
import { FadeParagraphTitle } from '../components/FadeElements'
import LinkedImage from '../components/LinkedImage'

const Dados = require('../data/dados.json')
const Cronograma = require('../data/cronograma.json')

const StyledCarouselCaption = styled(CarouselCaption)`
  && {
    bottom: 0;
    padding: 0;
    text-align: left;
    left: 7%;
    right: 7%;
  }
`

const CongressoFirstBlock = () => (
  <PaddedContentBox skewedOnDesktop className="text-justify">
    <ParagraphTitle reversedSkew className="text-lg-right">
      o congresso
    </ParagraphTitle>
    <Paragraph lastLineRightDesktop reversedSkew>
      Depois do sucesso absoluto da estreia em 2018 o Congresso de Operações Policiais retorna mais
      abrangente, inclusivo, dinâmico, informativo e tecnológico.
    </Paragraph>
    <Paragraph lastLineRightDesktop reversedSkew>
      Congresso se realizará de forma gratuita nos dias 17, 18 e 19 de Março de 2019 para um público
      diário de aproximadamente 2000 pessoas.
    </Paragraph>
    <Paragraph lastLineRightDesktop reversedSkew>
      A cidade-sede escolhida é pelo segundo ano consecutivo a belíssima{' '}
      <ParagraphLink href="http://www.pmf.sc.gov.br" target="_blank">
        Florianópolis
      </ParagraphLink>
      , que por sua vez abriga o moderno{' '}
      <ParagraphLink
        href="https://www.facebook.com/CentrodeEventosGovernadorLuizHenriquedaSilveira"
        target="_blank"
      >
        Centro de Eventos Governador Luiz Henrique da Silveira
      </ParagraphLink>
      .
    </Paragraph>
  </PaddedContentBox>
)

const CongressoSecondBlock = () => (
  <PaddedContentBox className="text-justify">
    <FadeParagraphTitle sm>o congresso</FadeParagraphTitle>
    <PaddedText>
      <Paragraph>Durante os três dias de evento, o COP colocará em contato direto:</Paragraph>
      <List>
        <li>Autoridades nacionais e internacionais;</li>
        <li>Agentes de segurança pública;</li>
        <li>As principais marcas do setor;</li>
        <li>E a sociedade civil.</li>
      </List>
      <Paragraph>
        A intensa programação de{' '}
        <InternalParagraphLink to="/agenda-e-palestrantes">Palestras</InternalParagraphLink> e{' '}
        <InternalParagraphLink to="/agenda-e-palestrantes">Exposições</InternalParagraphLink> será
        uma oportunidade única adquirir conhecimento, ter contato com o que existe de mais moderno
        em táticas e equipamentos de defesa e debater pontos críticos da segurança pública; sempre
        na direção de uma sociedade mais segura.
      </Paragraph>
    </PaddedText>
  </PaddedContentBox>
)

const CongressoFirstCarousel = () => {
  const Slides = [
    {
      imagem: 'ocongresso_slider01-01.jpg',
      caption: 'Ct. Eventos. Gov. Luiz H. Silveira',
    },
    {
      imagem: 'ocongresso_slider01-02.jpg',
      caption: 'Auditório',
    },
    {
      imagem: 'ocongresso_slider01-03.jpg',
      caption: 'Chegando em Florianópolis',
    },
    {
      imagem: 'ocongresso_slider01-04.jpg',
      caption: 'Ponte Hercílio Luz',
    },
    {
      imagem: 'ocongresso_slider01-05.jpg',
      caption: 'Credenciamento',
    },
    {
      imagem: 'ocongresso_slider01-06.jpg',
      caption: 'Hall',
    },
    {
      imagem: 'ocongresso_slider01-07.jpg',
      caption: 'Tradução simultânea',
    },
    {
      imagem: 'ocongresso_slider01-08.jpg',
      caption: 'Controle auditório',
    },
    {
      imagem: 'ocongresso_slider01-09.jpg',
      caption: 'Público',
    },
    {
      imagem: 'ocongresso_slider01-10.jpg',
      caption: 'Instalação no hall',
    },
    {
      imagem: 'ocongresso_slider01-11.jpg',
      caption: 'Autoridades',
    },
    {
      imagem: 'ocongresso_slider01-02.jpg',
      caption: 'Sinalização',
    },
  ]

  const CarouselItem = Slides.map(slide => (
    <Carousel.Item key={slide.i}>
      <Image imgName={slide.imagem} />
      <StyledCarouselCaption>
        <CarouselCaptionTitle>{slide.caption}</CarouselCaptionTitle>
      </StyledCarouselCaption>
    </Carousel.Item>
  ))
  return (
    <div style={{ position: 'relative' }}>
      <MolduraTop />
      <Carousel indicators={false}>{CarouselItem}</Carousel>
      <MolduraBottom />
      <Shadow />
    </div>
  )
}

const CongressoSecondCarousel = () => {
  const Slides = [
    {
      imagem: 'ocongresso_slider02-01.jpg',
      caption: 'Autoridades',
    },
    {
      imagem: 'ocongresso_slider02-02.jpg',
      caption: 'Palestrante internacional',
    },
    {
      imagem: 'ocongresso_slider02-03.jpg',
      caption: 'Cobertura midiática',
    },
    {
      imagem: 'ocongresso_slider02-04.jpg',
      caption: 'Entrevista',
    },
    {
      imagem: 'ocongresso_slider02-05.jpg',
      caption: 'Cobertura midiática',
    },
    {
      imagem: 'ocongresso_slider02-06.jpg',
      caption: 'Entrevista',
    },
    {
      imagem: 'ocongresso_slider02-07.jpg',
      caption: 'Stand 5.11 Tactical',
    },
    {
      imagem: 'ocongresso_slider02-08.jpg',
      caption: 'Workshop',
    },
    {
      imagem: 'ocongresso_slider02-09.jpg',
      caption: 'Workshop',
    },
    {
      imagem: 'ocongresso_slider02-10.jpg',
      caption: 'Vigilância e tecnologia',
    },
    {
      imagem: 'ocongresso_slider02-11.jpg',
      caption: 'Stand Condor Não Letal',
    },
    {
      imagem: 'ocongresso_slider02-12.jpg',
      caption: 'Stand Taurus',
    },
  ]

  const CarouselItem = Slides.map(slide => (
    <Carousel.Item key={slide.i}>
      <Image imgName={slide.imagem} />
      <StyledCarouselCaption>
        <CarouselCaptionTitle>{slide.caption}</CarouselCaptionTitle>
      </StyledCarouselCaption>
    </Carousel.Item>
  ))
  return (
    <div style={{ position: 'relative' }}>
      <MolduraTop />
      <Carousel indicators={false}>{CarouselItem}</Carousel>
      <MolduraBottom />
      <Shadow />
    </div>
  )
}

const Botoes = () => (
  <div
    className="mt-5 mb-5 d-flex flex-column justify-content-between align-items-center w-100"
    style={{ height: '9em' }}
  >
    <Botao texto="Inscreva-se Agora!" width="12em" to={Dados.linkInscricao} />
    <Botao texto="Confira  a Programação" width="12em" to="/agenda-e-palestrantes" />
  </div>
)

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

const OCongressoMobile = () => (
  <MediaQuery maxWidth={991}>
    <SEO title="O Congresso" />
    <Image imgName="ocongresso_composite.png" />
    <CongressoFirstBlock />
    <CongressoFirstCarousel />
    <CongressoSecondBlock />
    <CongressoSecondCarousel />
    <Botoes />
  </MediaQuery>
)

// Desktop

const FullWidthInscricao = styled(FullWidth)`
  background-color: var(--amber);
  text-align: center;
  padding: 1.5em;
  margin-top: 1.5em;
`

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
      <li>Operações Aéreas;</li>
      <li>Operações com emprego de animais;</li>
      <li>Patrulhamento Tático Motorizado (2 e 4 Rodas);</li>
      <li>Operações de Inteligência;</li>
      <li>Operações Integradas (GAECO;)</li>
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
              Então ao participr do congresso você estará automaticamente ajudando duas instituições
              filantrópicas da cidade-sede do evento: A Igreja Bola de Neve e o SEOVE Caridade.
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
        leia mais
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
