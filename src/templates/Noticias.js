import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Photo from '../components/photo'
import { FadeParagraphTitle } from '../components/FadeElements'
import { PaddedContentBox, Paragraph, PaddedText, TitleH3, ParagraphTitle } from '../components/typography'

const SocialIcons = styled.div`
  display: inline-flex;
  padding: 0 1em;
`

const StyledPhoto = styled.div`
  .gatsby-image-wrapper {
    max-height: 350px !important;
  }
`
const SocialPalestrante = styled.div`
  color: var(--narvik);
  font-family:"TilliumWeb";
  font-size: 0.8em;
  a {
    color: var(--amber);
    padding: .5em;
    text-decoration: underline;
    &:hover {
      color: var(--amber);
    }
  }
`
const Subtitulo = styled.div`
    font-family: 'TTSupermolotNeue';
    color: var(--lemongrass);
    font-size: 1.1em;
`



const NoticiasTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
    <SEO title={frontmatter.titulo} />
      <StyledPhoto>
        <Photo imgName={frontmatter.imagem} />
      </StyledPhoto>
      <div style={{ padding: '2em', paddingTop: '0' }}>
        <FadeParagraphTitle sm style={{ marginBottom: '.2em' }}>
          {frontmatter.titulo}
        </FadeParagraphTitle>
        <Subtitulo>
          {frontmatter.subtitulo}
        </Subtitulo>
      </div>
      <PaddedText style={{ padding: '1em', textAlign: 'justify' }}>
        <Paragraph as="div"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </PaddedText>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        titulo
        subtitulo
        imagem
      }
    }
  }
`

export default NoticiasTemplate