import React from 'react'
import { Link } from 'gatsby'
import { Accordion, Tab, Row, Col, Nav, Container } from 'react-bootstrap'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import { device } from '../components/device'
import Photo from './photo'
import { PaddedContentBox, Paragraph, PaddedText, ParagraphTitle, TitleH3 } from './typography'
import { FadeParagraphTitle } from './FadeElements'
import FullWidth from './fullwidth'

const Programacao = require('../data/cronograma.json')

const StyledNav = styled(Nav)`
  background-color: var(--firefly);
  display: flex;
  font-family: 'TTSupermolotNeue';
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
      @media ${device.desktop} {
        font-size: 1.1em;
        padding: 0.2em;
        font-weight: 600;
        letter-spacing: var(--lp2);
        &:first-of-type {
          padding-left: 0.8em;
        }
        &:last-of-type {
          padding-right: 0.8em;
        }
      }
      &.active {
        font-weight: 700 !important;
        @media ${device.desktop} {
          background-color: var(--amber) !important;
          color: var(--bunker) !important;
          font-weight: 600 !important;
        }
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
  font-family: 'TTSupermolotNeue';
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
  font-family: 'TTSupermolotNeue';
  font-weight: 400;
  margin-top: -1em;
`

const GreyDivisor = styled.hr`
  background-color: var(--tapa);
  width: 2em;
  height: 2px;
  margin: 0;
`

export const AgendaMobile = ({ defaultActiveKeyAccordion, defaultActiveKeyTab }) => {
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
              <span style={{ textAlign: 'right', flexBasis: '30%' }}>{atividade.hora}</span>
              <span style={{ flexBasis: '65%' }}>{atividade.titulo}</span>
            </Accordion.Toggle>
          ) : (
              <Accordion.Toggle as="div" eventKey={atividade.slug} key={atividade.slug}>
                <Link
                  to={`/agenda-e-palestrantes/${atividade.slug}`}
                  activeClassName="opened-accordion"
                  className="d-flex justify-content-between has-content"
                >
                  <span style={{ textAlign: 'right', flexBasis: '30%' }}>{atividade.hora}</span>
                  <div className="d-flex justify-content-between" style={{ flexBasis: '65%' }}>
                    <span>{atividade.palestrante}</span>
                    <FontAwesomeIcon
                      size="xs"
                      icon={faCaretDown}
                      style={{ alignSelf: 'center', marginRight: '1em' }}
                    />
                  </div>
                </Link>
              </Accordion.Toggle>
            )}
          {atividade.descricao == null ? null : (
            <Accordion.Collapse eventKey={atividade.slug} style={{ position: 'relative' }}>
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
    <Tab.Container defaultActiveKey={defaultActiveKeyTab} id="cronograma">
      <div style={{ marginTop: '-1.5em' }}>
        <div>
          <StyledNav>{NavItem}</StyledNav>
        </div>
        <div>
          <Tab.Content style={{ paddingTop: '2em', paddingBottom: '2em' }}>{TabPane}</Tab.Content>
        </div>
      </div>
      <StyledNav>{NavItem}</StyledNav>
    </Tab.Container>
  )
}

const DataHeader = styled.h2`
  color: var(--lemongrass);
  font-family: 'TTSupermolotNeue';
  font-size: 1.5em;
  font-style: italic;
  font-weight: 600;
  line-height: 1.3em;
`
const StyledRow = styled(Row)`
  color: var(--tapa);
  font-family: 'TTSupermolotNeue';
  font-size: 1.1em;
  background-color: var(--bunker);
  border: none !important;
  line-height: 1.5em;
  letter-spacing:var(--lp2a);
  &:nth-of-type(odd) {
    background: linear-gradient(90deg, rgba(8, 20, 31, 0) 0%, rgba(8, 20, 31, 1) 100%);
  }
`

const StyledCol = styled(Col)`
  letter-spacing: var(--lp2a);
  border-left: 1.5px solid var(--bunker);
  border-right: 1.5px solid var(--bunker);
  &:first-of-type,
  &:last-of-type {
    border: none;
  }
`

export const AgendaTabelaDesktop = () => {
  const DataMap = Programacao.map(dia => (
    <StyledCol>
      <DataHeader>{dia.diaLongo}</DataHeader>
      {dia.atividades.map(atividade => (
        <StyledRow>
          <Col lg={4}>
            {atividade.descricao == null ? (
              <>{atividade.hora}</>
            ) : (
                <Link
                  to={`/agenda-e-palestrantes/${atividade.slug}`}
                  style={{ color: 'var(--narvik' }}
                >
                  {atividade.hora}
                </Link>
              )}
          </Col>
          <Col lg={8} style={{ marginLeft: '-1em' }}>
            {atividade.descricao == null ? (
              <>{atividade.titulo}</>
            ) : (
                <Link
                  to={`/agenda-e-palestrantes/${atividade.slug}`}
                  style={{ color: 'var(--narvik' }}
                >
                  {atividade.palestrante}
                </Link>
              )}
          </Col>
        </StyledRow>
      ))}
    </StyledCol>
  ))
  return (
    <Container>
      <TitleH3>datas</TitleH3>
      <div style={{ position: 'relative' }}>
        <FullWidth
          style={{
            backgroundColor: 'var(--firefly)',
            height: '2em',
            position: 'absolute',
            width: '100vw',
            top: '0',
          }}
        />
        <Row>{DataMap}</Row>
      </div>
    </Container>
  )
}

const StyledPhoto = styled.div`
  .gatsby-image-wrapper {
    max-height: 250px !important;
  }
`
const StyledLink = styled(Link)`
  color: var(--narvik);
  &:hover {
    color: var(--amber);
  }
  &.atividadeActive {
    color: var(--amber);
    font-weight: 600;
  }
  &.palestranteActive {
    color: var(--amber);
  }
  
`

const Qualificacao = styled.div`
  color: var(--tapa);
  font-size: .9em;
  line-height: .9em;
  &:hover{
    color: var(--tapa);
  }
`

export const AgendaDesktop = ({
  defaultActiveKeyTabContainer,
  defaultActiveKeyTabContainerPalestrante,
}) => {
  //active do palestrante deve ser igual ao slug
  const NavItem = Programacao.map(dia => (
    <div style={{ border: ".5px solid var(--bunker" }}>
      <Nav.Item>
        <Nav.Link eventKey={dia.dia}>{dia.diaLongo}</Nav.Link>
      </Nav.Item>
    </div>
  ))

  const TabPane = Programacao.map(dia => (
    <Tab.Pane eventKey={dia.dia}>
      <Tab.Container id="palestrantes" defaultActiveKey={defaultActiveKeyTabContainerPalestrante}>
        <Row>
          <Col sm={4} style={{ paddingTop: '9em', paddingRight: "0" }}>
            <div style={{ marginBottom: "2em" }}>
              {dia.atividades.map(atividade => (
                <Nav className="flex-column" style={{ flexWrap: "nowrap" }}>
                  <Nav.Item>
                    <Nav.Link style={{ paddingTop: "0", paddingBottom: "0" }} eventKey={atividade.slug}>
                      <StyledRow>
                        <Col lg={4}>
                          {atividade.descricao == null ? (
                            <>{atividade.hora}</>
                          ) : (
                              <StyledLink to={`/agenda-e-palestrantes/${atividade.slug}`} activeClassName="atividadeActive">
                                {atividade.hora}
                              </StyledLink>
                            )}
                        </Col>
                        <Col lg={8} style={{ marginLeft: '-1em' }}>
                          {atividade.descricao == null ? (
                            <>{atividade.titulo}</>
                          ) : (
                              <StyledLink to={`/agenda-e-palestrantes/${atividade.slug}`} activeClassName="atividadeActive">
                                {atividade.palestrante}
                              </StyledLink>
                            )}
                        </Col>
                      </StyledRow>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              ))}
            </div>
            <div>
              <TitleH3 style={{marginBottom:"1em"}}>palestrantes</TitleH3>
              {dia.atividades.map(atividade => (
                <>
                  {atividade.palestrante == null 
                  ? null
                  : (
                    <StyledRow className="m-0">
                    <Col className="p-0">
                      <Nav className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey={atividade.slug} style={{paddingTop:".5em", paddingBottom:".5em"}}>
                            <StyledLink to={`/agenda-e-palestrantes/${atividade.slug}`} activeClassName="palestranteActive">
                              {atividade.palestrante}
                              <Qualificacao>{atividade.qualificacao}</Qualificacao>
                            </StyledLink>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                  </StyledRow>
                  )
                }
                </>
              ))}
            </div>
          </Col>
          <Col sm={8} className="p-0" style={{ marginLeft: '-4px' }}>
            <Tab.Content>
              {dia.atividades.map(atividade => (
                <Tab.Pane eventKey={atividade.slug}>
                  <div>
                    <StyledPhoto>
                      <Photo imgName={atividade.imagem} />
                    </StyledPhoto>
                    <div style={{padding:"2em", paddingTop:"0"}}>
                    <FadeParagraphTitle sm>{atividade.palestrante}</FadeParagraphTitle>
                    <Qualificacao>{atividade.qualificacao}</Qualificacao>
                    <div>Palestra: {atividade.titulo} | {dia.diaCompleto} - {atividade.hora} </div>
                    <PaddedText>teste</PaddedText>
                    </div>
                  </div>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Tab.Pane>
  ))
  return (
    <>
      <Tab.Container defaultActiveKey={defaultActiveKeyTabContainer} id="cronograma">
        <div style={{ position: 'absolute', zIndex: '2' }}>
          <TitleH3>datas</TitleH3>
          <StyledNav>{NavItem}</StyledNav>
        </div>
        <Tab.Content style={{ paddingTop: '0', paddingBottom: '2em', marginTop: "-1.5em" }}>
        <div className="opened-accordion" style={{marginTop:"-5em", paddingTop:"4em"}}></div>
        {TabPane}
        </Tab.Content>
      </Tab.Container>
    </>
  )
}
