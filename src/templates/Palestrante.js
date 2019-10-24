import React from "react"
import { Accordion, Tab, Nav } from "react-bootstrap"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import MediaQuery from "react-responsive"

import Layout from "../components/layout"
import { device } from "../components/device"
import SEO from "../components/seo"
import Photo from "../components/photo"
import { PaddedContentBox, Paragraph, PaddedText, ParagraphTitle } from "../components/typography";
import { FadeParagraphTitle } from "../components/FadeElements"
import { Link } from "gatsby"
import FullWidth from "../components/fullwidth"

const Programacao = require("../data/cronograma.json")

const StyledPaddedText = styled(PaddedText)`
  @media ${device.desktop}{
    top:8em;
    position: absolute;
    z-index: 2;
  }  
`
const PhotoWrapper = styled.div`
  .gatsby-image-wrapper {
    max-height: 340px;
  }
`

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
    svg {
      transform: rotateX(180deg);
  } 
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

const Body = ({ children }) => (
  <Layout>
  <SEO title="Agenda e Palestrantes" />
  <StyledPaddedText>
    <ParagraphTitle>agenda & palestrantes</ParagraphTitle>
  </StyledPaddedText>
  <FullWidth>
    <PhotoWrapper>
      <Photo imgName="programacao_capa.jpg" />
    </PhotoWrapper>
  </FullWidth>
    {children}
</Layout>
)

export default ({ pageContext: { dataContext, atividadeContext } }) => {
  const NavItem = Programacao.map(dia => (
    <Nav.Item>
      <Nav.Link eventKey={dia.dia}>{dia.dia}</Nav.Link>
    </Nav.Item>
  ))
  const TabPane = Programacao.map(dia => (
    <Tab.Pane eventKey={dia.dia}>
      {dia.atividades.map(atividade => (
        <StyledAccordion defaultActiveKey={atividadeContext.slug}>
          {atividade.descricao == null ? (
            <Accordion.Toggle
              as="div"
              eventKey={atividade.slug}
              key={atividade.slug}
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
                <Link to={`/agenda-e-palestrantes/${atividade.slug}`} activeClassName="opened-accordion" className="d-flex justify-content-between has-content">
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
            <Accordion.Collapse eventKey={atividade.slug} style={{ position: "relative" }}>
              <div>
                <Photo imgName={atividade.imagem} />
                <PaddedContentBox className="pt-0">
                  <FadeParagraphTitle sm>{atividade.titulo}</FadeParagraphTitle>
                  <Hora>{atividade.hora}</Hora>
                  <PaddedText>
                    {atividade.descricao.map(paragrafo => (
                      <Paragraph dangerouslySetInnerHTML={{ __html: `${paragrafo}` }} />
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
    <Body>
    <Tab.Container defaultActiveKey={dataContext.dia} id="cronograma">
      <div style={{ marginTop: "-1.5em" }}>
        <div>
          <StyledNav>
            {NavItem}
          </StyledNav>
        </div>
        <div>
          <Tab.Content style={{ paddingTop: "2em", paddingBottom: "2em" }}>
            {TabPane}
          </Tab.Content>
        </div>
      </div>
      <StyledNav>
        {NavItem}
      </StyledNav>
    </Tab.Container>
    </Body>
  )
}