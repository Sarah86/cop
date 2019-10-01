import React from "react"
import "@babel/polyfill";
import LogoBranca from "./logobranca"
import styled from "styled-components"
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Botao from "./botao"
import Paragraph from "./paragraph"
import CNCGLogo from "../images/CNCG.png"
import ReactPlayer from 'react-player'
import {device} from "./device"

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 85px);
    justify-content: space-evenly;
    align-items: center;
`;

const LogoConselho = styled.img`
    height: 3em;
    display: block;
    margin: 0 auto;
`;

const FullWidthBackgroundVideo = styled(ReactPlayer)`
    position: absolute;
    z-index: -1;
    :after {
        content: "";
        background-color: rgba(0, 0, 0, 0.80);
        position:absolute;
        left:0;
        top:0;
        width: 100%;
        height: 100%;
        z-index: 2;
    }
    video {
        object-fit: cover;
    }
`;

const ConselhoNacional = () => (
    <>
    <LogoConselho src={CNCGLogo} alt="Conselho Nacional de Comandantes Gerais PM/CBM"/>
    <Paragraph className="text-center">Conselho Nacional <br/>de Comandantes Gerais PM/CBM apresenta:</Paragraph>
    </>
);

const Video = () => (
    <div style={{marginLeft:"-1.1em", marginTop:"-1em"}}>
    <FullWidthBackgroundVideo url='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' muted loop playing width="100%" height="100vh" />
    </div>
);

const LocalTexto = styled.h2`
    font-family: var(--font3);
    font-size: .95em;
    margin-top: 1.2em;
`;

const Local = () => (
    <div style={{height:"auto", textAlign:"center"}}>
        <FontAwesomeIcon icon={faMapMarkerAlt} size="lg"/>
        <LocalTexto>17, 18 e 19 de Março - Florianópolis/SC</LocalTexto>
    </div>
);

const HomeMobile = () => (
    <div className="d-lg-none">
        <Video/>
        <HomeContainer>
            <ConselhoNacional/>
            <div style={{width: "65vw"}}><LogoBranca/></div>
            <Local/>
            <Botao texto="Inscreva-se Agora!" background="transparent"/>
        </HomeContainer>
    </div>
);

export default HomeMobile;