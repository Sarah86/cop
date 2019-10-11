import React from "react"
import ReactPlayer from "react-player";

import { MolduraTop, MolduraBottom } from "../components/moldura";
import Shadow from "../components/shadow";


const FramedVideo = (props) => (
  <div style={{ position: "relative" }}>
    <MolduraTop />
    <ReactPlayer {...props} />
    <MolduraBottom />
    <Shadow />
  </div>
);

export default FramedVideo