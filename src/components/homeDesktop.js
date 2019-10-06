import React from "react"
import styled from "styled-components"
import ReactPlayer from "react-player";
import { Container, Row, Col } from "react-bootstrap"

import Local from "./location"
import LogoConselho from "../images/CNCG.png"
import Isotipo from "../images/COP-ISOTIPO-TEXTURADO.png"
import { MolduraTop, MolduraBottom } from "./moldura";
import Shadow from "./shadow";
import { ParagraphTitle, Paragraph, ParagraphLink, Quote } from "./typography"
import Image from "./image";
import Photo from "./photo";

const Background = styled.div`
    position: absolute;
    width: 130%;
    height: 118%;
    background-image: url(${Isotipo});
    background-position: right;
    background-repeat: no-repeat;
    background-size: 55%;
    z-index: -1;
`;

const BemVindo = styled.h2`
    font-size: 3em;
    font-family: var(--font2);
    font-weight: 300;
    letter-spacing: var(--lp0);
    padding-top: 1.5em;
`;

const Sublegenda = styled.span`
    font-size: 1.5em;
    font-family: var(--font2);
    font-weight: 300;
    letter-spacing: var(--lp2);
`;

const ApresentadoPor = styled.div`
    display: inline-block;
    color: var(--amber);
    font-family: var(--font3);
    font-size: 1em;
    letter-spacing: var(--lp3);
    margin-top: 1em;
`;

const Conselho = styled.img`
    position: absolute;
    width: 200px;
    margin-left: 2em;
    bottom: -3em;
    z-index: 2;
`;

const VideoContainer = styled.div`
    background-color: var(--firefly);
    display:flex;
    justify-content: center;
    padding-bottom: .21em;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
`;

const BoasVindas = () => (
    <div style={{ position: "relative", paddingBottom: "3em" }}>
        <Background />
        <BemVindo>Bem vindo ao <br />Congresso Internacional de Operações Policiais</BemVindo>
        <Sublegenda>O maior evento de segurança e defesa da América Latina</Sublegenda>
        <Local fontSize="1em" iconSize="1.2em" />
        <ApresentadoPor>Orgulhosamente apresentado pelo CNGC - Conselho Nacional de Comandantes Gerais</ApresentadoPor>
        <Conselho src={LogoConselho} />
    </div>
);

const Video = () => (
    <VideoContainer>
        <div style={{ position: "relative" }}>
            <MolduraTop />
            <ReactPlayer url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls width="910px" height="100%" />
            <MolduraBottom />
            <Shadow />
        </div>
    </VideoContainer>
);

const CongressoPalestrantes = () => (
    <Container style={{ marginTop: "3em" }}>
        <Row>
            <Col className="text-justify pr-5">
                <ParagraphTitle>o congresso</ParagraphTitle>
                <Quote>Autoridades nacionais e internacionais, agentes de segurança pública,
                as principais marcas do setor, e a sociedade civil. Em contato direto por 3 dias.</Quote>
                <Paragraph>Depois do sucesso absoluto da estreia em 2018 o Congresso de Operações Policiais retorna mais abrangente, inclusivo, dinâmico, informativo e tecnológico.</Paragraph>
                <Paragraph>Congresso se realizará de forma gratuita nos dias 17, 18 e 19 de Março de 2019 para um público diário de aproximadamente 2000 pessoas..
</Paragraph>
                <Paragraph>A cidade-sede escolhida é pelo segundo ano consecutivo a belíssima <ParagraphLink>Florianópolis</ParagraphLink>, que por sua vez abriga o moderno <ParagraphLink>
                    Centro de Eventos Governador Luiz Henrique da Silveira
                </ParagraphLink>.
</Paragraph>
            </Col>
            <Col className="pl-5">
                <ParagraphTitle>palestrantes</ParagraphTitle>
                <Row>
                    <Col><Photo imgName="placeholder-photo.jpeg" title="Jair Messias Bolsonaro" subtitle="Presidente da República"/></Col>
                    <Col><Photo imgName="placeholder-photo.jpeg" title="Hamilton Mourão" subtitle="Vice-Presidente e General do EB"/></Col>
                </Row>
                <Row>
                    <Col><Photo imgName="placeholder-photo.jpeg" title="Sérgio Moro" subtitle="Ministro da Justiça"/></Col>
                    <Col><Photo imgName="placeholder-photo.jpeg" title="Maurício Silveira" subtitle="Cmdte. Grupamento de Choque PMSC"/></Col>
                </Row>
            </Col>
        </Row>
    </Container>
);

const HomeDesktop = () => (
    <>
        <BoasVindas />
        <Video />
        <CongressoPalestrantes />
    </>
);

export default HomeDesktop;