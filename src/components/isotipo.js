import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Isotipo from "../images/COP-ISOTIPO-TEXTURADO.png"

const IsotipoCopWrapper = styled.div`
  width: 2em;
  height: 2em;
`

const IsotipoCop = () => (
  <IsotipoCopWrapper>
    <Link to="/">
      <img src={Isotipo} alt="COP" />
    </Link>
  </IsotipoCopWrapper>
)

export default IsotipoCop
