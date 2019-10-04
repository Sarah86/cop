import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MolduraTop, MolduraBottom } from "../components/moldura";
import ReactPlayer from "react-player";

const Video = () => (
      <div style={{position:"relative"}}>
      <MolduraTop/>
      <ReactPlayer url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls width="100%" height="100%"/>
      <MolduraBottom/>
      </div>
);

const OCongresso = () => (
  <Layout>
    <SEO title="O Congresso" />
    <h1>o congresso</h1>
    <Video/>
  </Layout>
)

export default OCongresso
