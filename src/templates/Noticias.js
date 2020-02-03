import React from "react"
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
`

const NoticiasTemplate = props => {
  const { pageContext } = props
  const { pageContent, links } = pageContext
  return (
    <div>
      {pageContent.map((content, index) => {
        return (
           <div style={{ minHeight: '650px' }} key={`content_item_${index}`}>
            <StyledPhoto>
              <Photo imgName={content.imagem} />
            </StyledPhoto>
            <div style={{ padding: '2em', paddingTop: '0' }}>
              <FadeParagraphTitle sm style={{ marginBottom: '.2em' }}>
                {content.titulo}
              </FadeParagraphTitle>
            <div
              style={{
                fontFamily: 'TTSupermolotNeue',
                color: 'var(--lemongrass)',
                fontSize: '1.1em',
              }}
            >
              {content.subtitulo}
            </div>
            <PaddedText style={{ padding: '0', textAlign: 'justify' }}>
              {content.texto}
            </PaddedText>
            <SocialPalestrante>
              Siga o palestrante:
                        <SocialIcons>

                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>

              </SocialIcons>
            </SocialPalestrante>
          </div>
        </div>
        )
      })}
    </div>
  )
}
export default NoticiasTemplate