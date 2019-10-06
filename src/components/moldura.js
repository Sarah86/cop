import React from "react"
import styled from "styled-components"
import { device } from "./device";

const BorderTop = styled.div`
    background-color: var(--firefly);    
    width: 100%;
    height: .6%;
    position: absolute;
    top:0;
    z-index: 1;
`;

const BarraTop = styled.div`
    background-color: var(--firefly);    
    height: 4px;
    width: 40%;
    left: -1.5px;
    position: absolute;
    transform: skewX(-50deg);
    z-index: 1;
    :before {
        content: "";
        background-color: var(--firefly);
        position: absolute;
        left: -4px;
        top: 0;
        height: 100%;
        width: 10%;
        transform: skewX(50deg);
    }
    @media ${device.desktop}{
        height: 3%;
        left: 4px;
        top: 0;
    }
`;

export const MolduraTop = () => (
    <>
    <BorderTop/>
    <BarraTop/>
    </>
);


const BorderBottom = styled.div`
    background-color: var(--firefly);    
    width: 100%;
    height: .6%;
    position: absolute;
    bottom:0;
    z-index: 1;
`;

const BarraBottom = styled.div`
    background-color: var(--firefly);    
    height: 4px;
    width: 30%;
    bottom: 8px;
    right: 0;
    position: absolute;
    transform: skewX(-50deg);
    z-index: 1;
    :after {
        content: "";
        background-color: var(--firefly);
        position: absolute;
        right: -3px;
        bottom: 0;
        height: 100%;
        width: 10%;
        transform: skewX(50deg);
    }
    @media ${device.desktop}{
        height: 3%;
        bottom: 0;
        right: 2px;
    }
`;

export const MolduraBottom = () => (
    <>
    <BarraBottom/>
    <BorderBottom/>
    </>
);