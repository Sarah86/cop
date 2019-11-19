import React from 'react'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HomeMobile from '../components/homeMobile'
import HomeDesktop from '../components/homeDesktop'
import OCongressoMobile from '../components/oCongressoMobile'

const HomeMobileWrapper = styled.div``

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="COP 2019 - Congresso de Operações Policiais" />
      <MediaQuery maxWidth={991}>
        <HomeMobileWrapper>
          <HomeMobile id="home" />
          <OCongressoMobile id="ocongresso" />
        </HomeMobileWrapper>
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <HomeDesktop />
      </MediaQuery>
    </Layout>
  )
}

export default IndexPage
