import React from "react"
import { Accordion, Card, Tab, Tabs } from "react-bootstrap"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'


import Layout from "../components/layout"
import SEO from "../components/seo"
import { ParagraphTitle, Paragraph, PaddedText, PaddedContentBox } from "../components/typography";
import Photo from "../components/photo"
import { FadeParagraphTitle } from "../components/FadeElements"
import { Programacao } from "../components/data/infos"

const StyledTabs = styled(Tabs)`
    background-color: var(--firefly);
    display: flex;
    font-family: "TTSupermolotNeue";
    font-weight: 500;
    margin-top: -1.5em;
    text-align: center;
    .nav-item {
        border: none !important;
        border-radius: 0 !important;
        color: var(--tapa);
        font-size: 1.5em;
        flex-grow: 1;
        margin: 1px;
        padding: 0;
        &.active {
            font-weight: 700 !important;
        }
        &:first-child, &:last-child {
            margin:0;
        }
    }
`

const StyledAccordion = styled(Accordion)`
    color: var(--tapa);
    font-family: "TTSupermolotNeue";
    font-size: 1.2em;
    background-color: var(--bunker);
    border: none !important;
    line-height: 1.5em;
    &:nth-of-type(odd){
        background-color: var(--blackpearl);
    }
    .has-content {
        color: var(--amber);
    }
`

const AgendaPalestrantes = () => {
    const tabItem = Programacao.map(dia =>
        <Tab eventKey={dia.dia} title={dia.dia} key={dia.i}>
            {
                dia.atividades.map(atividade =>
                    <StyledAccordion defaultActiveKey="0">
                        {atividade.descricao == null
                            ? <Accordion.Toggle as="div" eventKey={atividade.i} key={atividade.i} className="d-flex justify-content-between">
                                <span style={{textAlign:"right", flexBasis:"30%"}}>{atividade.hora}</span><span style={{flexBasis:"65%"}}>{atividade.titulo}</span>
                            </Accordion.Toggle>
                            : <Accordion.Toggle as="div" eventKey={atividade.i} key={atividade.i} className="d-flex justify-content-between has-content">
                                <span style={{textAlign:"right", flexBasis:"30%"}}>{atividade.hora}</span><div className="d-flex justify-content-between" style={{flexBasis:"65%"}}><span>{atividade.titulo}</span><FontAwesomeIcon size="xs" icon={faCaretDown} style={{ alignSelf: "center", marginRight:"1em" }}/></div>
                            </Accordion.Toggle>
                        }
                        {atividade.descricao == null ? null :
                            <Accordion.Collapse eventKey={atividade.i}>
                                <div>
                                    <Photo imgName={atividade.imagem} />
                                    <PaddedContentBox>
                                        <FadeParagraphTitle sm>{atividade.titulo}</FadeParagraphTitle>
                                        <h3>{atividade.hora}</h3>
                                        <PaddedText>
                                            {
                                                atividade.descricao.map(paragrafo =>
                                                    <Paragraph>{paragrafo}</Paragraph>)
                                            }
                                        </PaddedText>
                                    </PaddedContentBox>
                                </div>
                            </Accordion.Collapse>
                        }
                    </StyledAccordion>
                )
            }
        </Tab>
    );

    return (
        <StyledTabs defaultActiveKey="17.mar" id="cronograma">
            {tabItem}
        </StyledTabs>
    )
}

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