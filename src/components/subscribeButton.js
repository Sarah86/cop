import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import IconSubscribe from "../images/ICON-INSCREVA-SE.png"


const IconSubscribeWrapper = styled.div`
    width:2em;
    height: 2em;
`;

const SubscribeButton = () => (
    <IconSubscribeWrapper>
            <Link href="/"><img src={IconSubscribe} alt="COP"/></Link>
    </IconSubscribeWrapper>
);

export default SubscribeButton