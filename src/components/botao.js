import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import "./theme.css"
import "./typography.css"

const StyledBotao = styled.button`
  background-color: transparent;
  background-color: ${props => props.background};
  border-color: ${props => (props.inverted ? "var(--bunker)" : "var(--amber)")};
  border-style: solid;
  border-width: 5px;
  border-width: ${props => props.borderWidth};
  width: 11em;
  width: ${props => props.width};
  padding: 0.4em;
  padding: ${props => props.padding};
  position: relative;
  &:hover {
    span {
      color: ${props => (props.inverted ? "var(--amber)" : "var(--bunker)")};
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
    background-color: ${props =>
      props.inverted ? "var(--bunker)" : "var(--amber)"};
    z-index: -1;
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: transform 0.5s ease-in-out;
  }
`

const BotaoText = styled.span`
  color: ${props => (props.inverted ? "var(--bunker)" : "var(--amber)")};
  display: block;
  font-family: "Poll";
  font-size: 1.5em;
  font-size: ${props => props.fontSize};
  font-weight: bold;
  letter-spacing: var(--lp2);
  line-height: 0.9em;
  margin-bottom: -0.2em;
  text-transform: uppercase;
  transform: skewX(12deg);
`

const Botao = ({
  background,
  borderWidth,
  fontSize,
  inverted,
  padding,
  texto,
  to,
  style,
  width,
}) => (
  <Link to={to}>
    <StyledBotao
      background={background}
      borderWidth={borderWidth}
      inverted={inverted}
      padding={padding}
      style={style}
      width={width}
    >
      <BotaoText inverted={inverted} fontSize={fontSize}>
        {texto}
      </BotaoText>
    </StyledBotao>
  </Link>
)

export default Botao
