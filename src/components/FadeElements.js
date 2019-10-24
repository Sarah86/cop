import React from "react"

import FadeEffect from "./FadeEffect"
import { ParagraphTitle } from "./typography.js"

export const FadeParagraphTitle = ({ children, ...props }) => (
  <ParagraphTitle {...props}>
    <FadeEffect>{children}</FadeEffect>
  </ParagraphTitle>
)
