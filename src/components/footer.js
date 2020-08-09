import React from 'react'
import MediaQuery from 'react-responsive'
import { Row, Col, Container } from 'react-bootstrap'
import styled, { css } from 'styled-components'

import Local from './location'
import FullWidth from './fullwidth'
import Image from './image'
import LinkedImage from './LinkedImage'
import Separador from './separador'
import { Link } from 'gatsby'
import SeparadorInverted from './separadorInverted'
import { OuroBox } from '../pages/expositores'
import { Paragraph, ParagraphLink } from './typography'
import { device } from './device'

const Cronograma = require('../data/cronograma.json')
const Expositores = require('../data/expositores.json')
const Dados = require('../data/dados.json')
const Apoio = require('../data/apoio.json')
const ApoioInstitucional = require('../data/apoio-institucional.json')
const ParceirosDeMidiaFile = require('../data/parceiros-midia.json')

const ColunaA = styled(Col)`
  background-color: var(--firefly);
  padding: 1.5em;
`
const ColunaB = styled(Col)`
  background-color: var(--feta);
  padding: 1.5em;
`

const TitleH1 = styled.h1`
  color: var(--lemongrass) !important;
  font-size: 1.8em !important;
  margin-bottom: 0.2em !important;
`

const SitemapTitle = styled.p`
  font-family: 'TTSupermolotNeue';
  color: var(--lemongrass);
  font-size: 1.5em;
  line-height: 1em;
  margin: 0.5em 0;
  letter-spacing: var(--lp1);
`

const SitemapUl = styled.ul`
  font-family: 'TilliumWeb';
  color: var(--tapa);
  position: relative;
  &:before {
    content: '';
    width: 0.59px;
    height: calc(100% - 1.3em);
    background-color: var(--tapa);
    position: absolute;
    left: 1px;
    top: 0.8em;
    opacity: 0.4;
  }
  li {
    line-height: 1.5em;
    list-style: none;
    font-size: 0.85em;
    margin: 0;
    position: relative;
    &:before {
      content: '▪';
      font-size: 0.7em;
      position: absolute;
      top: 0;
    }
  }
`
const DisabledLink = styled.span`
  padding-left: 10px;
`

const StyledLink = styled(Link)`
  color: var(--lemongrass);
  padding-left: 10px;
  &:hover {
    color: var(--amber);
  }
  ${props =>
    props.page &&
    css`
      font-weight: 600;
    `}
`

const ExternalStyledLink = styled.a`
  color: var(--lemongrass);
  padding-left: 10px;
  &:hover {
    color: var(--amber);
  }
  ${props =>
    props.page &&
    css`
      font-weight: 600;
    `}
`

const LinkExterno = styled.a`
  display: block;
  color: var(--tapa);
  font-family: 'TilliumWeb';
  font-size: 0.8em;
  &:hover {
    color: var(--amber);
  }
`

const StyledDiaFooter = styled.li`
  color: var(--tapa);
  font-weight: 600;
  span {
    padding-left: 10px;
  }
`

const FooterTitleBold = styled.h3`
  font-family: 'TTSupermolotNeue';
  color: var(--plantation);
  font-size: 1.7em;
  font-weight: 600;
  margin-bottom: 0.1em;
  margin-top: -0.1em;
  letter-spacing: var(--lp1);
  span {
    font-weight: 300;
    display: block;
    margin-bottom: -0.2em;
  }
`
const StyledImage = styled(Image)`
  display: inline-block;
  width: 70px;
  margin: 0.5em;
  mix-blend-mode: luminosity;
  opacity: 0.7;
`
const PatrocinadoresImage = styled(LinkedImage)`
  mix-blend-mode: darken;
  opacity: 0.7;
  height: 100%;
  img {
    padding: calc(${props => props.padding} / 3);
  }
`

const StyledCol = styled(Col)`
  border: 0.5px solid var(--kidnapper);
  max-height: 50px;
  img {
    object-fit: contain !important;
  }
`

const Creditos = styled.div`
  padding: 2em;
  padding-bottom: 4em;
  ${Paragraph} {
    margin-bottom: 0.5em;
  }
  @media ${device.desktop} {
    padding-bottom: 0;
  }
`

const Isotipo = () => (
  <div style={{ width: '90px', marginLeft: '.5em', marginBottom: '1.5em' }}>
    <Image imgName="logo_cop_isotipo.png" style={{ filter: 'contrast(0.1)' }} />
  </div>
)

const FooterTitle = () => (
  <>
    <TitleH1>Congresso Internacional de Operações Policiais</TitleH1>
    <Local fontSize=".7em" iconSize="1.2em" Color="var(--lemongrass)" />
    <Separador color="var(--plantation)" border="1px" widthTotal="95%" nomargin sm />
  </>
)

const FooterMenuItem = props => (
  <li>
    <StyledLink to={props.link} activeClassName="active" page={props.page} section={props.section}>
      {props.title}
    </StyledLink>
  </li>
)

const FooterMenuItemExternal = props => (
  <li>
    <ExternalStyledLink href={props.link} page={props.page} section={props.section}>
      {props.title}
    </ExternalStyledLink>
  </li>
)

const Sitemap = () => {
  const Palestrantes = Cronograma.map((data, i) => (
    <SitemapUl key={`data-${i}`}>
      <StyledDiaFooter>
        <span>{data.diaFooter}</span>
      </StyledDiaFooter>
      <SitemapUl>
        {data.atividades.map((atividade, i) => (
          <div key={i}>
            {atividade.descricao ? (
              <FooterMenuItem
                link={`/palestras-e-workshops/${atividade.slug}`}
                title={atividade.palestrante}
                key={`atividade-${i}`}
              />
            ) : atividade.palestrante ? (
              <li>
                <DisabledLink key={`atividade-${i}`}>{atividade.palestrante}</DisabledLink>
              </li>
            ) : null}
          </div>
        ))}
      </SitemapUl>
    </SitemapUl>
  ))

  const Expositores = (
    <SitemapUl>
      <StyledDiaFooter>
        <span>Downloads Restritos</span>
      </StyledDiaFooter>
      <SitemapUl>
        <FooterMenuItemExternal link={Dados.manualmarca} title="Manual de Uso da Marca COP" />
        <FooterMenuItemExternal link={Dados.manualmarca} title="Manual do Expositor" />
      </SitemapUl>
    </SitemapUl>
  )

  return (
    <>
      <SitemapTitle>sitemap</SitemapTitle>
      <div>
        <SitemapUl>
          <FooterMenuItem page="true" link="/" title="Home" />
          <FooterMenuItem page="true" link="/ocongresso" title="O Congresso" />
          <FooterMenuItem page="true" link="/palestras-e-workshops" title="Programação" />
          {Palestrantes}
          <FooterMenuItem page="true" link="/expositores" title="Expositores" />
          {Expositores}
          <FooterMenuItem page="true" link="/hoteisparceiros" title="Hotéis Parceiros" />
        </SitemapUl>
      </div>
    </>
  )
}

const Contatos = () => (
  <>
    <Separador color="var(--plantation)" border="1px" widthTotal="95%" sm />
    <div className="d-flex flex-column justify-content-center">
      <SitemapTitle>contato</SitemapTitle>
      <LinkExterno href={`mailto:${Dados.contatoEmail}`}>{Dados.contatoEmail}</LinkExterno>
    </div>
    <Separador color="var(--plantation)" border="1px" widthTotal="95%" sm />
    <div>
      <SitemapTitle>imprensa</SitemapTitle>
      <LinkExterno href={`mailto:${Dados.imprensaEmail}`}>{Dados.imprensaEmail}</LinkExterno>
    </div>
  </>
)

const FooterRealizacao = () => (
  <>
    <div className="w-75">
      <div>
        <FooterTitleBold className="d-inline-block">realização e produção</FooterTitleBold>
        <Separador
          className="d-inline-block ml-2"
          color="var(--kidnapper)"
          border="1px"
          widthTotal="35%"
          widthBarra="70%"
          nomargin
          tall
        />
      </div>
      <StyledImage imgName="logo_sansone.png" />
      <div className="d-flex justify-content-center w-75">
        <SeparadorInverted
          color="var(--kidnapper)"
          border="1px"
          widthTotal="90%"
          nomargin
          tall
          translated
        />
      </div>
    </div>
  </>
)

const PatrocinadoresUnificado = props => {
  const ExpositorCategory = Expositores.diamante.concat(
    Expositores.ouro,
    Expositores.prata,
    Expositores.bronze
  )

  // .sort((a, b) => a.nome > b.nome ? 1 : -1)

  const Expositor = ExpositorCategory.map((expositor, i) => (
    <StyledCol sm="2" key={`expositor-${i}`}>
      <PatrocinadoresImage
        noyellowlayer="true"
        imgName={expositor.logo}
        to={`${expositor.site}`}
        target="_blank"
        rel="noopener noreferrer"
        padding={expositor.padding}
      />
    </StyledCol>
  ))

  return (
    <>
      <OuroBox>
        <FooterTitleBold>
          <span>patrocinadores</span>
        </FooterTitleBold>
        <Container className="m-0 p-0 w-75">
          <Separador
            color="var(--kidnapper)"
            border="1px"
            widthTotal="50%"
            widthBarra="40%"
            nomargin
            tall
          />
          <Row noGutters className="pt-2 pb-2">
            {Expositor}
          </Row>
          <SeparadorInverted
            className="ml-n3"
            color="var(--kidnapper)"
            border="1px"
            widthTotal="50%"
            widthBarra="40%"
            nomargin
            tall
            translated
          />
        </Container>
      </OuroBox>
    </>
  )
}

const Apoiadores = props => {
  // .sort((a, b) => a.nome > b.nome ? 1 : -1)

  const Apoiador = Apoio.map((apoiador, i) => (
    <StyledCol sm="2" key={`apoiador-${i}`}>
      <PatrocinadoresImage
        noyellowlayer="true"
        imgName={apoiador.logo}
        to={`${apoiador.site}`}
        target="_blank"
        rel="noopener noreferrer"
        padding={apoiador.padding}
      />
    </StyledCol>
  ))

  return (
    <>
      <OuroBox>
        <FooterTitleBold>
          <span>apoiadores</span>
        </FooterTitleBold>
        <Container className="m-0 p-0 w-75">
          <Separador
            color="var(--kidnapper)"
            border="1px"
            widthTotal="50%"
            widthBarra="40%"
            nomargin
            tall
          />
          <Row noGutters className="pt-2 pb-2">
            {Apoiador}
          </Row>
          <SeparadorInverted
            className="ml-n3"
            color="var(--kidnapper)"
            border="1px"
            widthTotal="50%"
            widthBarra="40%"
            nomargin
            tall
            translated
          />
        </Container>
      </OuroBox>
    </>
  )
}

const ApoiadoresInstitucionais = props => {
  // .sort((a, b) => a.nome > b.nome ? 1 : -1)

  const ApoiadorInstitucionalItem = ApoioInstitucional.map((apoiadorinstitucional, i) => (
    <StyledCol sm="2" key={`apoiador-${i}`}>
      <PatrocinadoresImage
        noyellowlayer="true"
        imgName={apoiadorinstitucional.logo}
        to={`${apoiadorinstitucional.site}`}
        target="_blank"
        rel="noopener noreferrer"
        padding={apoiadorinstitucional.padding}
      />
    </StyledCol>
  ))

  return (
    <>
      <OuroBox>
        <FooterTitleBold>
          <span>apoio institucional</span>
        </FooterTitleBold>
        <Container className="m-0 p-0 w-75">
          <Separador
            color="var(--kidnapper)"
            border="1px"
            widthTotal="50%"
            widthBarra="40%"
            nomargin
            tall
          />
          <Row noGutters className="pt-2 pb-2">
            {ApoiadorInstitucionalItem}
          </Row>
          <SeparadorInverted
            className="ml-n3"
            color="var(--kidnapper)"
            border="1px"
            widthTotal="50%"
            widthBarra="40%"
            nomargin
            tall
            translated
          />
        </Container>
      </OuroBox>
    </>
  )
}

const ParceirosDeMidia = props => {
  // .sort((a, b) => a.nome > b.nome ? 1 : -1)

  const ParceiroDeMidia = ParceirosDeMidiaFile.map((parceirodemidia, i) => (
    <StyledCol sm="2" key={`midia-${i}`}>
      <PatrocinadoresImage
        noyellowlayer="true"
        imgName={parceirodemidia.logo}
        padding={parceirodemidia.padding}
        to={`${parceirodemidia.site}`}
        target="_blank"
        rel="noopener noreferrer"
      />
    </StyledCol>
  ))

  return (
    <>
      <OuroBox>
        <FooterTitleBold>
          <span>parceiros de mídia</span>
        </FooterTitleBold>
        <Container className="m-0 p-0 w-75">
          <Separador
            color="var(--kidnapper)"
            border="1px"
            widthTotal="50%"
            widthBarra="40%"
            nomargin
            tall
          />
          <Row noGutters className="pt-2 pb-2">
            {ParceiroDeMidia}
          </Row>
          <SeparadorInverted
            className="ml-n3"
            color="var(--kidnapper)"
            border="1px"
            widthTotal="50%"
            widthBarra="40%"
            nomargin
            tall
            translated
          />
        </Container>
      </OuroBox>
    </>
  )
}

const CreditosSection = () => (
  <Creditos className="text-center">
    <Paragraph style={{ color: 'var(--narvik)', fontWeight: '600' }}>
      COP Internacional - Todos os Direitos Reservados © 2019
    </Paragraph>
    <Paragraph style={{ fontSize: '.7em' }}>
      Design: <ParagraphLink href="http://www.gara.dj">Alvaro Marques</ParagraphLink> -
      Desenvolvimento:{' '}
      <ParagraphLink href="http://sarahgoncalves.netlify.com">Sarah Gonçalves</ParagraphLink>
    </Paragraph>
    <Paragraph>
      <span style={{ fontSize: '.6em' }}>
        Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
      </span>
    </Paragraph>
  </Creditos>
)

const Footer = () => (
  <footer style={{ minHeight: '5em', marginTop: '3em' }}>
    <MediaQuery maxWidth={991}>
      <CreditosSection />
    </MediaQuery>
    <MediaQuery minWidth={992}>
      <FullWidth>
        <div>
          <Row>
            <ColunaA xs={5}>
              <div style={{ width: '50%', float: 'right' }}>
                <Isotipo />
                <FooterTitle />
                <Sitemap />
                <Contatos />
              </div>
            </ColunaA>
            <ColunaB xs={7} className="p-4">
              <FooterRealizacao />
              <div className="mt-3">
                <PatrocinadoresUnificado />
                <Apoiadores />
                <ApoiadoresInstitucionais />
                <ParceirosDeMidia />
              </div>
            </ColunaB>
          </Row>
          <CreditosSection />
        </div>
      </FullWidth>
    </MediaQuery>
  </footer>
)

export default Footer
