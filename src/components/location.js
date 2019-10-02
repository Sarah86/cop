import React from "react"
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {Infos} from "./data/infos"
import {device} from "./device"


const LocalTexto = styled.h2`
    font-family: var(--font3);
    font-weight: 500;
    font-size: ${props => props.fontSize};
    margin-top: 1.2em;

    @media ${device.desktop}{
        display: inline-block;
    }
`;

const IconSize = styled.span`
    font-size: ${props => props.iconSize};
    padding: .3em;
`;

const Local = ( {style, fontSize, iconSize} ) => (
    <div style={style}>
        <IconSize iconSize={iconSize}><FontAwesomeIcon icon={faMapMarkerAlt}/></IconSize>
        <LocalTexto fontSize={fontSize}>{Infos.dataLocal}</LocalTexto>
    </div>
);

export default Local;