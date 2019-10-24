import React from "react"
import styled from "styled-components"
import { device } from "./device"

const BorderTop = styled.div`
  background-color: var(--firefly);
  width: 100%;
  height: 0.6%;
  position: absolute;
  top: 0;
  z-index: 2;
`

const BarraTop = styled.div`
  background-color: var(--firefly);
  height: 4px;
  width: 30%;
  left: -1.5px;
  position: absolute;
  transform: skewX(-50deg);
  z-index: 2;
  :before {
    content: "";
    background-color: var(--firefly);
    position: absolute;
    left: -4.1%;
    top: 0;
    height: 100%;
    width: 20px;
    transform: skewX(50deg);
  }
  @media ${device.desktop} {
    height: 3%;
    left: 1.2%;
    top: 0;
  }
`

export const MolduraTop = () => (
  <>
    <BorderTop />
    <BarraTop />
  </>
)

const BorderBottom = styled.div`
  background-color: var(--firefly);
  width: 100%;
  height: ${props => (props.sm ? "1px" : ".6%")};
  position: absolute;
  bottom: 0;
  z-index: 1;
`

const BarraBottom = styled.div`
  background-color: var(--firefly);
  height: 4px;
  width: ${props => (props.sm ? "30px" : "30%")};
  bottom: 0;
  right: 0;
  position: absolute;
  transform: skewX(-50deg);
  z-index: 1;
  :after {
    content: "";
    background-color: var(--firefly);
    position: absolute;
    right: -3%;
    bottom: 0;
    height: 100%;
    width: 20px;
    transform: skewX(50deg);
  }
  @media ${device.desktop} {
    height: ${props => (props.sm ? "5px" : "3%")};
    bottom: 0;
    right: 9px;
    :after {
      right: -9px;
    }
  }
`

export const MolduraBottom = ({ sm }) => (
  <>
    <BarraBottom sm={sm} />
    <BorderBottom sm={sm} />
  </>
)
