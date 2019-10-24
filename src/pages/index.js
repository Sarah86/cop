import React from "react"
import MediaQuery from "react-responsive"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeMobile from "../components/homeMobile"
import HomeDesktop from "../components/homeDesktop"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MediaQuery maxWidth={991}>
      <HomeMobile />
    </MediaQuery>
    <MediaQuery minWidth={992}>
      <HomeDesktop />
    </MediaQuery>
  </Layout>
)

export default IndexPage
