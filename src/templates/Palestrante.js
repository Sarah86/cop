import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import { device } from "../components/device"
import SEO from "../components/seo"
import Photo from "../components/photo"
import {
  PaddedText,
  ParagraphTitle,
} from "../components/typography"
import FullWidth from "../components/fullwidth"
import { AgendaMobile } from "../components/agenda"

const StyledPaddedText = styled(PaddedText)`
  @media ${device.desktop} {
    top: 8em;
    position: absolute;
    z-index: 2;
  }
`
const PhotoWrapper = styled.div`
  .gatsby-image-wrapper {
    max-height: 340px;
  }
`

const Body = ({ children }) => (
  <Layout>
    <SEO title="Agenda e Palestrantes" />
    <StyledPaddedText>
      <ParagraphTitle>agenda & palestrantes</ParagraphTitle>
    </StyledPaddedText>
    <FullWidth>
      <PhotoWrapper>
        <Photo imgName="programacao_capa.jpg" />
      </PhotoWrapper>
    </FullWidth>
    {children}
  </Layout>
)

export default class Palestrante extends React.Component {
  componentDidMount() {
    this.handleAutoScroll()
  }

  componentDidUpdate() {
    this.handleAutoScroll()
  }

  handleAutoScroll = () => {
    setTimeout(() => {
      document
        .querySelector(".opened-accordion")
        .scrollIntoView({ block: "start", behavior: "smooth" })
      //console.log("Scrolled to opened accordion")
    }, 50)
  }

  render() {
    const { dataContext, atividadeContext } = this.props.pageContext
    return (
      <Body>
        <AgendaMobile
          defaultActiveKeyAccordion={atividadeContext.slug}
          defaultActiveKeyTab={dataContext.dia}
        />
      </Body>
    )
  }
}
