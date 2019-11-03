import React from "react"
import { Row, Col } from "react-bootstrap";
import styled, { css } from "styled-components"

import Local from "./location";
import FullWidth from "./fullwidth"
import Image from "./image";
import Separador from "./separador";
import { Link } from "gatsby";

const Cronograma = require('../data/cronograma.json')

const ColunaA = styled(Col)`
    background-color: var(--firefly);
    padding: 1.5em;
`
const ColunaB = styled(Col)`
    background-color: var(--narvik);
    padding: 1.5em;
`

const TitleH1 = styled.h1`
    color: var(--lemongrass) !important;
    font-size: 1.8em !important;
    margin-bottom: 0.2em !important;
`

const SitemapTitle = styled.p`
    font-family: "TTSupermolotNeue";
    color: var(--lemongrass);
    font-size: 1.5em;
    margin: 1em 0;
    letter-spacing: var(--lp1);
`

const Isotipo = () => (
    <div style={{ width: "90px", marginLeft: ".5em", marginBottom: "1.5em" }}>
        <Image imgName="COP-ISOTIPO-TEXTURADO.png" />
    </div>
)

const FooterTitle = () => (
    <>
        <TitleH1>Congresso Internacional de Operações Policiais</TitleH1>
        <Local fontSize=".7em" iconSize="1.2em" style={{ color: "var(--lemongrass" }} />
        <Separador color="var(--plantation)" border="1px" widthTotal="95%" noMargin sm />
    </>
);

const SitemapUl = styled.ul`
    font-family: "TilliumWeb";
    color: var(--tapa);
    position: relative;
    &:before {
        content:"";
        width: .59px;
        height: calc(100% - 1.2em);
        background-color: var(--tapa); 
        position: absolute;
        left:1px;
        top: .8em;
        opacity: .4;
    }
    li {
        line-height: 1.5em;
        list-style: none;
        font-size: 0.85em;
        margin: 0;
        position: relative;
        &:before {
            content: "▪";
            font-size: .7em;
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
    ${props => props.page && css`
        font-weight: 600;
    ` }

`
const StyledDiaFooter = styled.li`
    color: var(--tapa);
    font-weight: 600;
    span {
        padding-left: 10px;
    }
`

const FooterMenuItem = (props) => (
    <li>
        <StyledLink to={props.link} activeClassName="active" page={props.page} section={props.section}>{props.title}</StyledLink>
    </li>
)

const Sitemap = () => {
    const Palestrantes = Cronograma.map(data => (
        <SitemapUl>
            <StyledDiaFooter><span>{data.diaFooter}</span></StyledDiaFooter>
            <SitemapUl>
                {data.atividades.map(atividade => (
                    <>
                        {
                            atividade.descricao
                            ? (<FooterMenuItem link={`/agenda-e-palestrantes/${atividade.slug}`} title={atividade.palestrante} />)
                            : atividade.palestrante 
                            ? (<li><DisabledLink>{atividade.palestrante}</DisabledLink></li>)
                            : null
                        }
                    </>
                ))}
            </SitemapUl>
        </SitemapUl>

    ))

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
                </SitemapUl>
            </div>
        </>
    )
}

const Footer = () => (
    <footer style={{ minHeight: '5em' }}>
        <FullWidth>
            <Row>
                <ColunaA xs={5}>
                    <div style={{ width: "50%", float: "right" }}>
                        <Isotipo />
                        <FooterTitle />
                        <Sitemap />
                    </div>
                </ColunaA>
                <ColunaB xs={7}>
                </ColunaB>
            </Row>
        </FullWidth>

        © {new Date().getFullYear()}, Built with
    {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
);

export default Footer