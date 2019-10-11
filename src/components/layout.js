/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/* eslint-disable */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { device } from "./device"
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./layout.css"
import "./theme.css"
import "./typography.css"

const Content = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  //padding: 0px 1.0875rem 1.45rem;
  padding-top: 1em;
  color: var(--narvik);
  @media ${device.desktop}{
    padding-top: 5em;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Content>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Content>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
