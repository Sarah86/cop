import React from "react"
import styled from "styled-components"
import { device } from "./device";
import Local from "./location"
import LogoConselho from "../images/CNCG.png"
import Isotipo from "../images/COP-ISOTIPO-TEXTURADO.png"
import ReactPlayer from "react-player";
import Moldura from "./moldura";


const HomeContainer = styled.div`
    display: none;
    @media ${device.desktop}{
        display: block;
    }
`;

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
    z-index: 1;
`;

const VideoContainer = styled.div`
    background-color: var(--firefly);
    position: absolute;
    width: 100%;
    left:0;
    right:0;
    display:flex;
    justify-content: center;
    padding: .21em;
`;

const BoasVindas = () => (
    <div style={{position: "relative", paddingBottom: "3em"}}>
        <Background/>
        <BemVindo>Bem vindo ao <br/>Congresso Internacional de Operações Policiais</BemVindo>
        <Sublegenda>O maior evento de segurança e defesa da América Latina</Sublegenda>
        <Local fontSize="1em" iconSize="1.2em"/>
        <ApresentadoPor>Orgulhosamente apresentado pelo CNGC - Conselho Nacional de Comandantes Gerais</ApresentadoPor>
        <Conselho src={LogoConselho}/>
    </div>
);

const Video = () => (
    <VideoContainer>
        <div style={{position:"relative"}}>
        <Moldura/>
        <ReactPlayer url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls width="910px" height="auto"/>
        </div>
    </VideoContainer>
);

const HomeDesktop = () => (
    <HomeContainer>
        <BoasVindas />
        <Video/>
    </HomeContainer>
);

export default HomeDesktop;