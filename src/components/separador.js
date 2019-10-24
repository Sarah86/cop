import React from "react"
import styled from "styled-components"

import { MolduraBottom } from "./moldura"

const SeparadorWrapper = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  height: 1em;
  position: relative;
  width: ${props => props.width};
  margin: ${props => (props.center ? "auto" : "")};
`

const Separador = ({ center, sm, widthTotal }) => (
  <SeparadorWrapper width={widthTotal} center={center}>
    <MolduraBottom sm={sm} />
  </SeparadorWrapper>
)

export default Separador
