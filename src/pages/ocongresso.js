import React from "react"
import { Carousel, Container, Col, Row } from "react-bootstrap"
import CarouselCaption from "react-bootstrap/CarouselCaption"
import styled from "styled-components"
import MediaQuery from 'react-responsive'



import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { MolduraTop, MolduraBottom } from "../components/moldura";
import { CarouselCaptionTitle, PaddedContentBox, ParagraphLink, ParagraphTitle, Paragraph, List } from "../components/typography";
import Photo from "../components/photo"
import Shadow from "../components/shadow";
import FramedVideo from "../components/framedVideo";
import Botao from "../components/botao";
import Background from "../components/background"
import FullWidth from "../components/fullwidth"

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
  <PaddedContentBox skewedOnDesktop className="text-justify">
    <ParagraphTitle reversedSkew className="text-lg-right">o congresso</ParagraphTitle>
    <Paragraph lastLineRightDesktop reversedSkew>Depois do sucesso absoluto da estreia em 2018 o Congresso de Operações Policiais retorna mais abrangente, inclusivo, dinâmico, informativo e tecnológico.</Paragraph>
    <Paragraph lastLineRightDesktop reversedSkew>Congresso se realizará de forma gratuita nos dias 17, 18 e 19 de Março de 2019 para um público diário de aproximadamente 2000 pessoas.</Paragraph>
    <Paragraph lastLineRightDesktop reversedSkew>A cidade-sede escolhida é pelo segundo ano consecutivo a belíssima <ParagraphLink>
      Florianópolis
    </ParagraphLink>, que por sua vez abriga o moderno <ParagraphLink>Centro de Eventos Governador Luiz Henrique da Silveira</ParagraphLink>.</Paragraph>
  </PaddedContentBox>
);

const CongressoSecondBlock = () => (
  <PaddedContentBox className="text-justify">
    <Paragraph>Durante os três dias de evento, o COP colocará em contato direto:</Paragraph>
    <List>
      <li>Autoridades nacionais e internacionais;</li>
      <li>Agentes de segurança pública;</li>
      <li>As principais marcas do setor;</li>
      <li>E a sociedade civil</li>
    </List>
    <Paragraph>A intensa programação de <ParagraphLink>Palestras</ParagraphLink> e <ParagraphLink>Exposições</ParagraphLink> será uma oportunidade única adquirir conhecimento, ter contato com o que existe de mais moderno em táticas e equipamentos de defesa e debater pontos críticos da segurança pública; sempre na direção de uma sociedade mais segura.</Paragraph>
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
      <FramedVideo url={video.url} light width="100%" height="100%" style={{ marginBottom: "1em" }} />
      <Paragraph style={{ textAlign: "center", paddingLeft: ".5em", paddingRight: ".5em" }}>{video.title}</Paragraph>
    </Col>
  );
  return (
    <>
      <PaddedContentBox>
        <ParagraphTitle>assista</ParagraphTitle>
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
  <div className="mt-5 mb-5 d-flex flex-column justify-content-between align-items-center w-100" style={{ height: "9em" }}>
    <Botao texto="Inscreva-se Agora!" width="12em" to="/" />
    <Botao texto="Confira  a Programação" width="12em" to="/" />
  </div>
);


const OCongressoMobile = () => (
  <MediaQuery maxWidth={991}>
    <SEO title="O Congresso" />
    <PaddedContentBox>
      <h1>o congresso</h1>
    </PaddedContentBox>
    <FramedVideo url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls width="100%" height="100%" />
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
    <Container style={{ position: "relative", maxWidth: "86%" }}>
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
      <Botao inverted texto="Inscreva-se Agora!" width="19em" fontSize="2em" borderWidth="9px" padding="1em" to="/" />
    </FullWidthInscricao>
  </>
);

const OCongressoDesktop = () => (
  <MediaQuery minWidth={992}>
    <OCongressoDesktopFirstBlock />
  </MediaQuery>
);

const OCongresso = () => (
  <Layout>
    <OCongressoMobile />
    <OCongressoDesktop />
  </Layout>
);

export default OCongresso
