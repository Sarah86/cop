import React from "react"
import LinkedImage from "./LinkedImage"
import Shadow from "./shadow"

const LinkedShadowedImage = ({ imgName, to }) => (
  <div style={{ position: "relative" }}>
    <LinkedImage imgName={imgName} to={to} />
    <Shadow />
  </div>
)

export default LinkedShadowedImage
