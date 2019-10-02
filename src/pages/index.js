import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeMobile from "../components/homeMobile"
import HomeDesktop from "../components/homeDesktop"


const IndexPage = () => (
  <Layout>
    <SEO/>
    <HomeMobile/>
    <HomeDesktop/>
  </Layout>
)

export default IndexPage
