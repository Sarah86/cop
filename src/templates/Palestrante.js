import React, { useEffect } from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'

import Layout from '../components/layout'
import { device } from '../components/device'
import SEO from '../components/seo'
import Photo from '../components/photo'
import { PaddedText, ParagraphTitle } from '../components/typography'
import FullWidth from '../components/fullwidth'
import { AgendaMobile, AgendaDesktop } from '../components/agenda'
import { WorkshopsMobile } from '../components/workshops'

const StyledPaddedText = styled(PaddedText)`
  @media ${device.desktop} {
    top: 8em;
    position: absolute;
    z-index: 3;
  }
`
const PhotoWrapper = styled.div`
  .gatsby-image-wrapper {
    max-height: 300px;
  }
`

const Body = ({ children }) => (
  <Layout>
    <SEO title="Palestras e Workshops" />
    <StyledPaddedText>
      <ParagraphTitle>palestras & workshops</ParagraphTitle>
    </StyledPaddedText>
    <FullWidth>
      <PhotoWrapper>
        <Photo imgName="palestrantes_topbanner.jpg" />
      </PhotoWrapper>
    </FullWidth>
    {children}
  </Layout>
)

const Palestrante = props => {
  useEffect(() => {
    setTimeout(() => {
      // window.scrollTo({
      //   top: 320,
      //   behavior: 'smooth',
      // });
      document
        .querySelector('.opened-accordion')
        .scrollIntoView({ block: 'start', behavior: 'auto' })
      //alert("should scroll")
    }, 100)
  })

  const { dataContext, atividadeContext } = props.pageContext

  return (
    <Body>
      <MediaQuery maxWidth={991}>
        <AgendaMobile
          defaultActiveKeyAccordion={atividadeContext.slug}
          defaultActiveKeyTab={dataContext.dia}
        />
        <WorkshopsMobile
          defaultActiveKeyAccordion={atividadeContext.slug}
          defaultActiveKeyTab={dataContext.dia}
        />
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <AgendaDesktop
          defaultActiveKeyTabContainer={dataContext.dia}
          defaultActiveKeyTabContainerPalestrante={atividadeContext.slug}
        />
      </MediaQuery>
    </Body>
  )
}

export default Palestrante
