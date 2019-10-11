import React from "react"

import FadeEffect from "./FadeEffect"
import { ParagraphTitle } from "./typography.js"

export const FadeParagraphTitle = ({ children, size, width }) => (
        <ParagraphTitle size={size} width={width}>
            <FadeEffect>
            {children}
            </FadeEffect>
        </ParagraphTitle>
)

