import React from "react"
import { Accordion, Card, Carousel, Container, Col, Row, Tab, Tabs } from "react-bootstrap"
import CarouselCaption from "react-bootstrap/CarouselCaption"
import styled from "styled-components"
import MediaQuery from 'react-responsive'


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { MolduraTop, MolduraBottom } from "../components/moldura";
import { CarouselCaptionTitle, PaddedContentBox, ParagraphLink, ParagraphTitle, Paragraph, List, OlList, ListOl, PaddedText } from "../components/typography";
import Photo from "../components/photo"
import Shadow from "../components/shadow";
import FramedVideo from "../components/framedVideo";
import Botao from "../components/botao";
import Background from "../components/background"
import FullWidth from "../components/fullwidth"
import Separador from "../components/separador"
import { FadeParagraphTitle } from "../components/FadeElements"
import { TabelaProgramacaoDia1 } from "../components/data/infos"

const AccordionDia1 = () => {

    const dia1Item = TabelaProgramacaoDia1.map((atividade) =>
        <Card key={atividade.i}>
            <Accordion.Toggle eventKey={atividade.i}>
                <div>
                    <span>{atividade.hora}</span><span>{atividade.titulo}</span>
                </div>
            </Accordion.Toggle>
            {atividade.descricao == null ? null :
                <Accordion.Collapse eventKey={atividade.i}>
                    <div>
                        <Photo imgName={atividade.imagem}/>
                        <FadeParagraphTitle>{atividade.titulo}</FadeParagraphTitle>
                        <h3>{atividade.hora}</h3>
                        <PaddedText>
                            {atividade.descricao}
                        </PaddedText>
                    </div>
                </Accordion.Collapse>
            }
        </Card>
    );
    return (
        <Accordion defaultActiveKey="0">
            {dia1Item}
        </Accordion>
    )
};

const AgendaPalestrantes = () => (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="17" title="17.mar">
            <AccordionDia1 />
        </Tab>
        <Tab eventKey="18" title="18.mar">
            <Paragraph>Texto</Paragraph>
        </Tab>
        <Tab eventKey="19" title="19.mar">
            <Paragraph>Texto</Paragraph>
        </Tab>
    </Tabs>
);

const Palestrantes = () => (
    <Layout>
        <SEO title="Agenda e Palestrantes" />
        <PaddedText>
            <ParagraphTitle>agenda & palestrantes</ParagraphTitle>
        </PaddedText>
        <Photo imgName="programacao_capa.jpg" />
        <AgendaPalestrantes />
    </Layout>
);//sem efeito de fade para nao precisar limitar o tamanho

export default Palestrantes