import React from 'react'
import MediaQuery from 'react-responsive'

import Layout from '../layouts/index'
import SEO from '../components/seo'
import HomeMobile from '../components/homeMobile'
import HomeDesktop from '../components/homeDesktop'
import OCongressoMobile from '../components/oCongressoMobile'


class IndexPage extends React.Component {


  render(){
    return(
     <Layout>
      <SEO title="COP 2019 - Congresso de Operações Policiais" />
      <MediaQuery maxWidth={991}>
        <HomeMobile />
        <OCongressoMobile id="ocongresso" />
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <HomeDesktop />
      </MediaQuery>
    </Layout>
    )
  }
}

export default IndexPage
