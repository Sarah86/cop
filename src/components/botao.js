import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

import "./theme.css"
import "./typography.css"


const StyledBotao = styled.button`
    background-color: var(--bunker);
    background-color: ${props => props.background};
    border: 5px solid var(--amber);
    width: 11em;
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
    transform: skewX(-10deg);
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
    transform: skewX(10deg);
`;

const Botao = ({ background, texto, style, to }) => (
    <a href={to}>
        <StyledBotao background={background} style={style}>
            <BotaoText>
                {texto}
            </BotaoText>
        </StyledBotao>
    </a>
);

export default Botao