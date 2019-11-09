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
import { FooterMenuMobile } from './header'
import { Paragraph, ParagraphLink } from './typography'
import { device } from './device'

const Cronograma = require('../data/cronograma.json')
const Expositores = require('../data/expositores.json')
const Dados = require('../data/dados.json')

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
  mix-blend-mode: luminosity;
  opacity: 0.7;
  transition: all 0.3s;
`

const StyledCol = styled(Col)`
  border: 0.5px solid var(--kidnapper);
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
    <Image imgName="COP-ISOTIPO-TEXTURADO.png" />
  </div>
)

const FooterTitle = () => (
  <>
    <TitleH1>Congresso Internacional de Operações Policiais</TitleH1>
    <Local fontSize=".7em" iconSize="1.2em" style={{ color: 'var(--lemongrass' }} />
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
  const Palestrantes = Cronograma.map(data => (
    <SitemapUl key={data.dia}>
      <StyledDiaFooter>
        <span>{data.diaFooter}</span>
      </StyledDiaFooter>
      <SitemapUl>
        {data.atividades.map(atividade => (
          <>
            {atividade.descricao ? (
              <FooterMenuItem
                link={`/agenda-e-palestrantes/${atividade.slug}`}
                title={atividade.palestrante}
                key={atividade.slug}
              />
            ) : atividade.palestrante ? (
              <li>
                <DisabledLink key={atividade.slug}>{atividade.palestrante}</DisabledLink>
              </li>
            ) : null}
          </>
        ))}
      </SitemapUl>
    </SitemapUl>
  ))

  const Expositores = (
    <SitemapUl>
      <FooterMenuItem link="/expositores#diamante" title="Expositores Diamante" />
      <FooterMenuItem link="/expositores#ouro" title="Expositores Ouro" />
      <FooterMenuItem link="/expositores#prata" title="Expositores Prata" />
      <FooterMenuItem link="/expositores#bronze" title="Expositores Bronze" />
      <StyledDiaFooter>
        <span>Downloads Restritos</span>
      </StyledDiaFooter>
      <SitemapUl>
        <FooterMenuItemExternal
          link={Dados.manualmarca}
          title="Manual de Uso da Marca COP"
        />
        <FooterMenuItemExternal
          link={Dados.manualmarca}
          title="Manual do Expositor"
        />
      </SitemapUl>
    </SitemapUl>
  )

  return (
    <>
      <SitemapTitle>sitemap</SitemapTitle>
      <div>
        <SitemapUl>
          <FooterMenuItem page link="/" title="Home" />
          <FooterMenuItem page link="/ocongresso" title="O Congresso" />
          <FooterMenuItem page link="/agenda-e-palestrantes" title="Agenda & Palestrantes" />
          {Palestrantes}
          <FooterMenuItem page link="/expositores" title="Expositores" />
          {Expositores}
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
      <LinkExterno href={Dados.linkContatoTel}>{Dados.contatoTel}</LinkExterno>
    </div>
    <Separador color="var(--plantation)" border="1px" widthTotal="95%" sm />
    <div>
      <SitemapTitle>imprensa</SitemapTitle>
      <LinkExterno href={`mailto:${Dados.imprensaEmail}`}>{Dados.imprensaEmail}</LinkExterno>
      <LinkExterno href={Dados.linkImprensaTel}>{Dados.imprensaTel}</LinkExterno>
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
      <StyledImage imgName="logo_cngc.png" />
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

const Patrocinadores = props => {
  const ExpositoresCategory = `${props.category}`
  const ExpositorLogo = Expositores[ExpositoresCategory].map(expositor => (
    <StyledCol sm={props.sm} key={expositor.nome}>
      <PatrocinadoresImage
        noyellowlayer
        imgName={expositor.logo}
        to={`${expositor.site}`}
        target="_blank"
        rel="noopener noreferrer"
      />
    </StyledCol>
  ))

  return (
    <>
      <OuroBox>
        <Container className="m-0 p-0">
          <Row noGutters className="pt-2 pb-2">
            {ExpositorLogo}
          </Row>
        </Container>
      </OuroBox>
    </>
  )
}

const PatrocinadoresGallery = props => (
  <div className="mt-3">
    <FooterTitleBold>
      <span>patrocinadores</span>
      {props.category}
    </FooterTitleBold>
    <div className="w-75">
      <div className="d-flex justify-content-center">
        <Separador
          color="var(--kidnapper)"
          border="1px"
          widthTotal="50%"
          widthBarra="40%"
          nomargin
          tall
        />
      </div>
      <Patrocinadores category={props.category} sm="2" />
    </div>
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
  </div>
)

const CreditosSection = () => (
  <Creditos className="text-center">
      <Paragraph style={{ color: 'var(--narvik)', fontWeight: '600' }}>
        COP Internacional - Todos os Direitos Reservados © 2019
      </Paragraph>
      <Paragraph style={{ fontSize: '.7em' }}>
        Design: <ParagraphLink href="http://www.gara.dj">Alvaro Marques</ParagraphLink> -
        Desenvolvimento: <ParagraphLink href="http://sarahgoncalves.netlify.com">Sarah Gonçalves</ParagraphLink>
      </Paragraph>
      <Paragraph>
        <span style={{ fontSize: '.6em' }}>
          Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </span>
      </Paragraph>
    </Creditos>
)

const Footer = () => (
  <FullWidth>
  <footer style={{ minHeight: '5em' }}>
    <MediaQuery maxWidth={991}>
      <FooterMenuMobile />
    </MediaQuery>
    <MediaQuery minWidth={992}>
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
            <div>
              <PatrocinadoresGallery category="diamante" />
              <PatrocinadoresGallery category="ouro" />
              <PatrocinadoresGallery category="prata" />
              <PatrocinadoresGallery category="bronze" />
            </div>
          </ColunaB>
        </Row>
    </MediaQuery>
    <CreditosSection/>
  </footer>
  </FullWidth>
)

export default Footer
