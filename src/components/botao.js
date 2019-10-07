import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

import "./theme.css"
import "./typography.css"


const StyledBotao = styled.button`
    background-color: transparent;
    background-color: ${props => props.background};
    border: 5px solid var(--amber);
    border-width: ${props => props.borderWidth};
    width: 11em;
    width: ${props => props.width};
    padding: .4em;
    position: relative;
    &:hover {
        span {
                color: var(--bunker);
        }
        &:before {
            transform: scaleX(1);   
        }
    }    
    transform: skewX(-12deg);
    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: var(--amber);
        z-index: -1;
        transform: scaleX(0);
        transform-origin: 0 50%;
        transition: transform 0.5s ease-in-out;
    }
`;

const BotaoText = styled.span`
    color: var(--amber);
    display: block;
    font-family: "Poll";
    font-size: 1.5em;
    font-weight: bold;
    letter-spacing: var(--lp2);
    line-height: .9em;
    margin-bottom: -.2em;
    text-transform: uppercase;
    transform: skewX(12deg);
`;

const Botao = ({ background, texto, style, to, borderWidth, width }) => (
    <a href={to}>
        <StyledBotao background={background} borderWidth={borderWidth} width={width} style={style}>
            <BotaoText>
                {texto}
            </BotaoText>
        </StyledBotao>
    </a>
);

export default Botao