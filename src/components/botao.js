import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import "./theme.css"
import "./typography.css"


const StyledBotao = styled.button`
    background-color: var(--bunker);
    border: 5px solid var(--amber);
    font-family: "Poll";
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: var(--lp2);
    color: var(--amber);
    line-height: .9em;
    font-size: .6em;
    width: 8em;
    transform: skewX(-10deg);
    padding: .3em;
    :hover, :focus {
        background-color: var(--amber);
        color: var(--bunker);
    }
`;

const Botao = ({ texto, style, to }) => (
    <Link to={to}>
        <StyledBotao style={style}>
		{texto}
	    </StyledBotao>
    </Link>
);

export default Botao;