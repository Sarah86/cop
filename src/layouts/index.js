/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/* eslint-disable */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, StaticQuery, graphql } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions';

import Transition from '../components/transition'
import Header from '../components/header'
import { device } from '../components/device'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/layout.css'
import '../components/theme.css'
import '../components/typography.css'
import Footer from '../components/footer'

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  //padding: 0px 1.0875rem 1.45rem;
  padding-bottom: 3em;
  padding-top: 1em;
  color: var(--narvik);

  @media ${device.desktop} {
    padding-top: 5em;
    padding-bottom: 7em;
  }
`

class Layout extends React.Component {
  render() {
    return (
      <PageTransition>
        <Header siteTitle={this.props.data.site.siteMetadata.title} />
        <Content>
          <main>{this.props.children}</main>
        </Content>
        <Footer />
      </PageTransition>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)
