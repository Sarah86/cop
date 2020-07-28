import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

import VideoDesktop from '../videos/COP-VIDEO-PROMO-FULL-HD-1920x1080-60s.mp4'
import { MolduraTop, MolduraBottom } from './moldura'
import Shadow from './shadow'

const VideoContainer = styled.div`
  background-color: var(--firefly);
  display: flex;
  justify-content: center;
  padding-bottom: 0.21em;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
`

const VideoTopoDesktop = () => {
  const data = useStaticQuery(
    graphql`
      {
        file(name: { eq: "Cover-Cop-Video-Wide" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              src
            }
          }
        }
      }
    `
  )
  const image = data.file.childImageSharp.fluid.src
  return (
    <VideoContainer>
      <div style={{ position: 'relative' }}>
        <MolduraTop />
        <ReactPlayer light={image} url={VideoDesktop} controls width="910px" height="460px" />
        <MolduraBottom />
        <Shadow />
      </div>
    </VideoContainer>
  )
}

export default VideoTopoDesktop
