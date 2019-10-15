import React from "react"
import { Carousel, Container, Col, Row } from "react-bootstrap"
import CarouselCaption from "react-bootstrap/CarouselCaption"
import styled from "styled-components"
import MediaQuery from 'react-responsive'



import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { MolduraTop, MolduraBottom } from "../components/moldura";
import { CarouselCaptionTitle, PaddedContentBox, ParagraphLink, ParagraphTitle, Paragraph, List, ListOl, PaddedText, ReadMore } from "../components/typography";
import Photo from "../components/photo"
import LinkedPhoto from "../components/LinkedPhoto"
import Shadow from "../components/shadow";
import FramedVideo from "../components/framedVideo";
import Botao from "../components/botao";
import Background from "../components/background"
import FullWidth from "../components/fullwidth"
import {Palestrantes} from "../components/data/infos"
import Separador from "../components/separador"
import { FadeParagraphTitle } from "../components/FadeElements"

const StyledCarouselCaption = styled(CarouselCaption)`
  && {
    bottom: 0;
    padding: 0;
    text-align: left;
    left: 7%;
    right: 7%;
  }
`;

const CongressoFirstBlock = () => (
  <PaddedContentBox 
    skewedOnDesktop 
    className="text-justify">
    <ParagraphTitle 
      reversedSkew 
      className="text-lg-right">
        o congresso
    </ParagraphTitle>
    <Paragraph 
      lastLineRightDesktop 
      reversedSkew>
      Depois do sucesso absoluto da estreia em 2018 o Congresso de Operações Policiais retorna mais abrangente, inclusivo, dinâmico, informativo e tecnológico.
    </Paragraph>
    <Paragraph 
      lastLineRightDesktop 
      reversedSkew>
      Congresso se realizará de forma gratuita nos dias 17, 18 e 19 de Março de 2019 para um público diário de aproximadamente 2000 pessoas.
    </Paragraph>
    <Paragraph 
      lastLineRightDesktop 
      reversedSkew>A cidade-sede escolhida é pelo segundo ano consecutivo a belíssima <ParagraphLink>Florianópolis</ParagraphLink>, que por sua vez abriga o moderno <ParagraphLink>Centro de Eventos Governador Luiz Henrique da Silveira</ParagraphLink>.
    </Paragraph>
  </PaddedContentBox>
);

const CongressoSecondBlock = () => (
  <PaddedContentBox className="text-justify">
    <FadeParagraphTitle sm>o congresso</FadeParagraphTitle>
    <PaddedText>
      <Paragraph>
        Durante os três dias de evento, o COP colocará em contato direto:
      </Paragraph>
      <List>
        <li>Autoridades nacionais e internacionais;</li>
        <li>Agentes de segurança pública;</li>
        <li>As principais marcas do setor;</li>
        <li>E a sociedade civil.</li>
      </List>
      <Paragraph>
        A intensa programação de <ParagraphLink>Palestras</ParagraphLink> e <ParagraphLink>Exposições</ParagraphLink> será uma oportunidade única adquirir conhecimento, ter contato com o que existe de mais moderno em táticas e equipamentos de defesa e debater pontos críticos da segurança pública; sempre na direção de uma sociedade mais segura.
      </Paragraph>
    </PaddedText>
  </PaddedContentBox>
);

const CongressoCarousel = () => {
  const Slides = [
    {
      imagem: "destaque_triplo_home_1.jpg",
      caption: "Cobertura Televisiva do Stand Taurus",
    },
    {
      imagem: "destaque_triplo_home_2.jpg",
      caption: "destaque_triplo_home_2.jpg",
    },
    {
      imagem: "destaque_triplo_home_3.jpg",
      caption: "destaque_triplo_home_3.jpg",
    }
  ];

  const CarouselItem = Slides.map((slide) => 
    <Carousel.Item key={slide.i}>
      <Image imgName={slide.imagem} />
      <StyledCarouselCaption>
        <CarouselCaptionTitle>{slide.caption}</CarouselCaptionTitle>
      </StyledCarouselCaption>
    </Carousel.Item>
  );
  return (
    <div style={{ position: "relative" }}>
      <MolduraTop />
      <Carousel indicators={false}>
        {CarouselItem}
      </Carousel>
      <MolduraBottom />
      <Shadow />
    </div>
  );
}

const Assista = () => {
  const Videos = [
    {
      url: "https://youtu.be/qpF-_5foMyc",
      title: "Cobertura da Edição Anterior",
    },
    {
      url: "https://youtu.be/qpF-_5foMyc",
      title: "Institucional CIOC",
    },
    {
      url: "https://youtu.be/qpF-_5foMyc",
      title: "Cobertura Completa Ao Vivo",
    },
  ];
  const VideoContainer = Videos.map((video) =>
    <Col xs={6}>
      <FramedVideo 
        url={video.url} 
        light width="100%" 
        height="100%" 
        style={{ marginBottom: "1em" }} />
      <Paragraph 
        style={{ textAlign: "center", 
        paddingLeft: ".5em", 
        paddingRight: ".5em" }}>{video.title}</Paragraph>
    </Col>
  );
  return (
    <>
      <PaddedContentBox>
        <FadeParagraphTitle>assista</FadeParagraphTitle>
      </PaddedContentBox>
      <Container className="p-0">
        <Row noGutters>
          {VideoContainer}
        </Row>
      </Container>
    </>
  );
}

const Botoes = () => (
  <div 
    className="mt-5 mb-5 d-flex flex-column justify-content-between align-items-center w-100" 
    style={{ height: "9em" }}>
    <Botao 
      texto="Inscreva-se Agora!" 
      width="12em" 
      to="/" />
    <Botao 
      texto="Confira  a Programação" 
      width="12em" 
      to="/" />
  </div>
);


const OCongressoMobile = () => (
  <MediaQuery maxWidth={991}>
    <SEO title="O Congresso" />
    <PaddedContentBox>
      <h1>o congresso</h1>
    </PaddedContentBox>
    <FramedVideo 
      url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" 
      controls 
      width="100%" 
      height="100%" />
    <Image imgName="ocongresso-capa.png" />
    <CongressoFirstBlock />
    <Photo imgName="floripa.png" />
    <CongressoSecondBlock />
    <CongressoCarousel />
    <Assista />
    <Botoes />
  </MediaQuery>
);

// Desktop

const FullWidthInscricao = styled(FullWidth)`
  background-color:var(--amber);
  text-align:center;
  padding:1.5em;
  margin-top:1.5em;
`;

const OCongressoDesktopFirstBlock = () => (
  <>
    <Container style={{ position: "relative" }}>
      <Background />
      <Row>
        <Col className="pt-5">
          <CongressoFirstBlock />
        </Col>
        <Col>
          <Image imgName="ocongresso-capa.png" />
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
        to="/" />
    </FullWidthInscricao>
  </>
);

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
);

const OCongressoDesktopSecondBlock = () => (
  <div className="mt-5">
    <Photo imgName="teatro.jpg" />
    <Container style={{ position: "relative" }}>
      <Background 
        position="left top" 
        left="-40%" />
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
);

const OCongressoDesktopThirdBlock = () => (
  <Container className="mt-5">
    <Row>
      <Col className="text-justify d-flex flex-column">
        <Photo imgName="ocongresso_espaco-abopesp.jpg" />
        <FadeParagraphTitle sm>espaço ABOpEsp</FadeParagraphTitle>
        <PaddedText><Paragraph>As unidades de operações especiais terão <strong>um espaço exclusivo para proporcionar trocas e aproximar doutrinas</strong> entre agentes das diferentes esferas e membros da segurança pública.</Paragraph>
          <Paragraph>A Associação Brasileira de Operações Especiais (ABOPESP) vai disponibilizar um estande no anfiteatro do Centro de Eventos Luiz Henrique da Silveira, com uma programação de clínicas e workshops para quem leva a atividade policial como um ofício de excelência.
        </Paragraph>
          <Image 
            imgName="logo-aboe.jpg" 
            style={{ width: "150px" }} />
          <Separador 
            sm 
            widthTotal="100px" />
        </PaddedText>
      </Col>
      <Col className="text-justify" >
        <Photo imgName="ocongresso_acoes-sociais.jpg" />
        <FadeParagraphTitle sm>ações sociais</FadeParagraphTitle>
        <PaddedText>
          <Paragraph>O COP Internacional fará a coleta de alimentos não-perecíveis  durante os 3 dias de evento.</Paragraph>
          <Paragraph>Então ao participr do congresso você estará automaticamente ajudando duas instituições filantrópicas da cidade-sede do evento: A Igreja Bola de Neve e o SEOVE Caridade.</Paragraph>
          <Paragraph><strong>A meta de arrecadação é de 4 toneladas de alimentos.</strong> Faça parte deste movimento!</Paragraph>
          <div 
            className="d-flex justify-content-between" 
            style={{width: "30%"}}>
            <Image 
              imgName="logo-seove.jpg" 
              style={{ width: "50px" }} />
            <Image 
              imgName="logo-boladeneve.jpg" 
              style={{ width: "50px" }} />
          </div>
          <Separador sm widthTotal="100px" />
        </PaddedText>
      </Col>
    </Row>
  </Container>

);

const OCongressoDesktopForthBlock = () => {
  const PalestranteContainer = Palestrantes.slice(0, 8).map((palestrante) => 
    <Col lg={3} className="p-1">
    <LinkedPhoto imgName={palestrante.foto} title={palestrante.nome} subtitle={palestrante.titulo} to={palestrante.link}/>
    </Col>
  );
  return(
    <Container className="mt-5 position-relative">
      <Background />
      <FadeParagraphTitle>palestrantes</FadeParagraphTitle>
      <Row noGutters>
        {PalestranteContainer}
      </Row>
      <ReadMore className="align-self-end">leia mais</ReadMore>
    </Container>
  );
}

const OCongressoDesktop = () => (
  <MediaQuery minWidth={992}>
    <OCongressoDesktopFirstBlock />
    <OCongressoDesktopSecondBlock />
    <Separador 
      center
      sm 
      widthTotal="80%" />
    <OCongressoDesktopThirdBlock />
    <OCongressoDesktopForthBlock/>
  </MediaQuery>
);

const OCongresso = () => (
  <Layout>
    <OCongressoMobile />
    <OCongressoDesktop />
  </Layout>
);

export default OCongresso
