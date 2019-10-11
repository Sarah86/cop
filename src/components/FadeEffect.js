
import React from "react"
import Fade from 'react-reveal/Fade';

const FadeEffect = ({children}) => (
    <Fade cascade delay={500} duration={2000}>{children}</Fade>
);

export default FadeEffect