import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import VideoMobile from '../videos/COP-VIDEO-PROMO-QUADRADO-1080x1080-60s.mp4'
import { PaddedContentBox } from './typography'
import SquareVideo from './squareVideo'

const VideoTopoMobile = () => {
  const data = useStaticQuery(
    graphql`{
      file(name: {eq: "Cover-Cop-Video-1x1"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            src
          }
        }
      }
      }
    `
  )
  const image =  data.file.childImageSharp.fluid.src
  return (
    <>
    <PaddedContentBox>
      <h1 className="mb-0 mt-4">o congresso</h1>
    </PaddedContentBox>
    <SquareVideo 
      url={VideoMobile} 
      light={`${image}`} 
      controls
      className={image} />
    </>
  )
   
}

export default VideoTopoMobile