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


import Header from './header'
import { device } from './device'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import './layout.css'
import './theme.css'
import './typography.css'
import Footer from './footer'

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  //padding: 0px 1.0875rem 1.45rem;
  padding-top: 1em;
  color: var(--narvik);
  
  @media ${device.desktop} {
    padding-top: 5em;
   
  }
`

class Layout extends React.Component {

  render() {
    return (
      <>
        <Header siteTitle={this.props.data.site.siteMetadata.title} />
        <Content>
             <main style={{ paddingBottom: '3em' }}>{this.props.children}</main>
        </Content>
        <Footer/>
      </>
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
