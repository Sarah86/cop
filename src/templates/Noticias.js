import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import rehypeReact from 'rehype-react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Photo from '../components/photo'
import { FadeParagraphTitle } from '../components/FadeElements'
import { Paragraph, PaddedText } from '../components/typography'
import { defaultCarousel } from '../components/carousels'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { carousel: defaultCarousel },
}).Compiler

const StyledPhoto = styled.div`
  .gatsby-image-wrapper {
    max-height: 350px !important;
  }
`

const Subtitulo = styled.div`
  font-family: 'TTSupermolotNeue';
  color: var(--lemongrass);
  font-size: 1.1em;
`

const NoticiasTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.titulo} />
      <StyledPhoto>
        <Photo imgName={frontmatter.imagem} />
      </StyledPhoto>
      <div style={{ padding: '1em', paddingTop: '0' }}>
        <FadeParagraphTitle sm style={{ marginBottom: '.2em' }}>
          {frontmatter.titulo}
        </FadeParagraphTitle>
        <Subtitulo>{frontmatter.subtitulo}</Subtitulo>
      </div>
      <PaddedText style={{ padding: '1em', textAlign: 'left' }}>
        {frontmatter.listTypeNone ? (
          <Paragraph as="div" listTypeNone>
            {renderAst(htmlAst)}
          </Paragraph>
        ) : (
          <Paragraph as="div">{renderAst(htmlAst)}</Paragraph>
        )}
      </PaddedText>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        titulo
        subtitulo
        imagem
        listTypeNone
      }
    }
  }
`

export default NoticiasTemplate
