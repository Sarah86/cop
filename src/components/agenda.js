import React from "react"
import { Link } from "gatsby"
import { Accordion, Tab, Row, Col, Nav, Container } from "react-bootstrap"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

import Photo from "./photo"
import {
    PaddedContentBox,
    Paragraph,
    PaddedText,
    ParagraphTitle,
    TitleH3,
} from "./typography"
import { FadeParagraphTitle } from "./FadeElements"
import FullWidth from "./fullwidth"

const Programacao = require("../data/cronograma.json")

const StyledNav = styled(Nav)`
  background-color: var(--firefly);
  display: flex;
  font-family: "TTSupermolotNeue";
  font-weight: 500;
  text-align: center;
  .nav-item {
    border: none !important;
    border-radius: 0 !important;
    flex-grow: 1;
    margin: 1px;
    padding: 0;
    .nav-link {
      color: var(--tapa);
      font-size: 1.5em;
      padding: 0;
      &.active {
        font-weight: 700 !important;
      }
    }
    &:first-child,
    &:last-child {
      margin: 0;
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
  &:nth-of-type(odd) {
    background-color: var(--blackpearl);
  }
  .has-content {
    color: var(--amber);
  }
  .opened-accordion {
    background-color: var(--amber);
    color: var(--bunker);
    font-weight: 500;
  }
`
const Hora = styled.h3`
  color: var(--amber);
  font-family: "TTSupermolotNeue";
  font-weight: 400;
  margin-top: -1em;
`

const GreyDivisor = styled.hr`
  background-color: var(--tapa);
  width: 2em;
  height: 2px;
  margin: 0;
`

export const AgendaMobile = ({
    defaultActiveKeyAccordion,
    defaultActiveKeyTab,
}) => {
    const NavItem = Programacao.map(dia => (
        <Nav.Item>
            <Nav.Link eventKey={dia.dia}>{dia.dia}</Nav.Link>
        </Nav.Item>
    ))

    const TabPane = Programacao.map(dia => (
        <Tab.Pane eventKey={dia.dia}>
            {dia.atividades.map(atividade => (
                <StyledAccordion defaultActiveKey={defaultActiveKeyAccordion}>
                    {atividade.descricao == null ? (
                        <Accordion.Toggle
                            as="div"
                            eventKey={atividade.i}
                            key={atividade.i}
                            className="d-flex justify-content-between"
                        >
                            <span style={{ textAlign: "right", flexBasis: "30%" }}>
                                {atividade.hora}
                            </span>
                            <span style={{ flexBasis: "65%" }}>{atividade.titulo}</span>
                        </Accordion.Toggle>
                    ) : (
                            <Accordion.Toggle
                                as="div"
                                eventKey={atividade.slug}
                                key={atividade.slug}
                            >
                                <Link
                                    to={`/agenda-e-palestrantes/${atividade.slug}`}
                                    activeClassName="opened-accordion"
                                    className="d-flex justify-content-between has-content"
                                >
                                    <span style={{ textAlign: "right", flexBasis: "30%" }}>
                                        {atividade.hora}
                                    </span>
                                    <div
                                        className="d-flex justify-content-between"
                                        style={{ flexBasis: "65%" }}
                                    >
                                        <span>{atividade.palestrante}</span>
                                        <FontAwesomeIcon
                                            size="xs"
                                            icon={faCaretDown}
                                            style={{ alignSelf: "center", marginRight: "1em" }}
                                        />
                                    </div>
                                </Link>
                            </Accordion.Toggle>
                        )}
                    {atividade.descricao == null ? null : (
                        <Accordion.Collapse
                            eventKey={atividade.slug}
                            style={{ position: "relative" }}
                        >
                            <div>
                                <Photo imgName={atividade.imagem} />
                                <PaddedContentBox className="pt-0">
                                    <FadeParagraphTitle sm>{atividade.titulo}</FadeParagraphTitle>
                                    <Hora>{atividade.hora}</Hora>
                                    <PaddedText>
                                        {atividade.descricao.map(paragrafo => (
                                            <Paragraph
                                                dangerouslySetInnerHTML={{ __html: `${paragrafo}` }}
                                            />
                                        ))}
                                        <GreyDivisor />
                                    </PaddedText>
                                </PaddedContentBox>
                            </div>
                        </Accordion.Collapse>
                    )}
                </StyledAccordion>
            ))}
        </Tab.Pane>
    ))
    return (
        <Tab.Container defaultActiveKey={defaultActiveKeyTab} id="cronograma">
            <div style={{ marginTop: "-1.5em" }}>
                <div>
                    <StyledNav>{NavItem}</StyledNav>
                </div>
                <div>
                    <Tab.Content style={{ paddingTop: "2em", paddingBottom: "2em" }}>
                        {TabPane}
                    </Tab.Content>
                </div>
            </div>
            <StyledNav>{NavItem}</StyledNav>
        </Tab.Container>
    )
}

const DataHeader = styled.h2`
    color: var(--lemongrass);
    font-family: "TTSupermolotNeue";
    font-size: 1.5em;
    font-style: italic;
    font-weight: 600;
    line-height: 1.3em;
`
const StyledRow = styled(Row)`
color: var(--tapa);
font-family: "TTSupermolotNeue";
font-size: 1.1em;
background-color: var(--bunker);
border: none !important;
line-height: 1.5em;
&:nth-of-type(odd) {
    background: linear-gradient(90deg, rgba(8,20,31,0) 0%, rgba(8,20,31,1) 100%);
}

`

const StyledCol = styled(Col)`
letter-spacing: var(--lp2a);
border-left: 1.5px solid var(--bunker);
border-right: 1.5px solid var(--bunker);
&:first-of-type, 
&:last-of-type {
    border:none;
}
`

export const AgendaTabelaDesktop = () => {
    const DataMap = Programacao.map(dia => (
        <StyledCol>
            <DataHeader>{dia.diaLongo}</DataHeader>
            {dia.atividades.map(atividade => (
                   <StyledRow>
                   <Col lg={4}>
                   {atividade.descricao == null
                   ? (<>{atividade.hora}</>)
                   : (<Link
                    to={`/agenda-e-palestrantes/${atividade.slug}`}
                    style={{color:"var(--narvik"}}
                    >
                    {atividade.hora}
                    </Link>)
                   }   
                   </Col>
                   <Col lg={8} style={{marginLeft:"-1em"}}>
                       {atividade.descricao == null 
                       ? (<>{atividade.titulo}</>)
                       : (<Link
                        to={`/agenda-e-palestrantes/${atividade.slug}`}
                        style={{color:"var(--narvik"}}
                        >
                        {atividade.palestrante}
                        </Link>)
                        }
                    </Col>
               </StyledRow>
            ))}
        </StyledCol>
    ))
    return (
        <Container>
            <TitleH3>datas</TitleH3>
            <div style={{position:"relative"}}>
            <FullWidth style={{backgroundColor:"var(--firefly)", height:"2em", position:"absolute", width:"100vw", top:"0"}}/>
            <Row>
               {DataMap}
            </Row>
            </div>
        </Container>
    )
}

export const AgendaDesktop = () => {

    //active do palestrante deve ser igual ao slug
    const NavItem = Programacao.map(dia => (
        <Nav.Item>
            <Nav.Link eventKey={dia.dia}>{dia.diaLongo}</Nav.Link>
        </Nav.Item>
    ))

    const TabPane = Programacao.map(dia => (
        <Tab.Pane eventKey={dia.dia}>
            <Tab.Container id="palestrantes" defaultActiveKey="">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <div>teste</div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <div>teste</div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Tab.Pane>
    ))
    return (
        <>
            <ParagraphTitle>datas</ParagraphTitle>
            <Tab.Container defaultActiveKey="17.mar" id="cronograma">
                <Row style={{ marginTop: "-1.5em" }}>
                    <Col md={4}>
                        <StyledNav>{NavItem}</StyledNav>
                        <Tab.Content style={{ paddingTop: "2em", paddingBottom: "2em" }}>
                            {TabPane}
                        </Tab.Content>
                    </Col>
                    <Col md={8}>
                        <div>conteudo do palestrante</div>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    )
}
