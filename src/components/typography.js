import { Link } from "gatsby"
import styled from "styled-components"

import { device } from "./device"


export const CarouselCaptionTitle = styled.h3`
    font-family: "TilliumWeb";
    font-size: 1.2em;
    margin-bottom: .5em;
`;

export const List = styled.ul`
    color: var(--lemongrass);
    font-family: "TilliumWeb";
    font-size: 1.1em;
    letter-spacing: var(--lp3);
    list-style-type: square;
    text-align: left;
    @media ${device.desktop}{
        font-size: .9em;
        letter-spacing: initial;
}
`;

export const PaddedContentBox = styled.div`
    padding: 1.5em;
    @media ${device.desktop}{
        transform: ${props => props.skewedOnDesktop ? "skewX(-12deg)" : ""};
    }
`;

export const Paragraph = styled.p`
    font-family: "TilliumWeb";
    color: var(--lemongrass);
    letter-spacing: var(--lp3);
    font-size: 1.1em;
    line-height: 1.2em;
    transform: ${props => props.reversedSkew ? "skewX(7deg)" : ""};
    @media ${device.desktop}{
        font-size: .87em;
        letter-spacing: initial;
        text-align-last: ${props => props.lastLineRightDesktop ? "end" : "" };
    }
`;

export const ParagraphLink = styled.a`
    &&& {
        color: var(--amber);
        font-weight: 600;
        text-decoration: underline;
        :hover {
            color: var(--amber);
            cursor: pointer;
        }
    }
`;

export const ParagraphTitle = styled.h2`
    font-family: var(--font2);
    font-size: 3em;
    font-weight: 300 ;
    color: var(--amber);
    letter-spacing: var(--lp1);
    line-height: .95em;
    width: ${props => props.width};
    transform: ${props => props.reversedSkew ? "skewX(7deg)" : ""};
    @media ${device.desktop}{
        font-size: 3.5em;
        font-size: ${props => props.size};
    }
`;

export const Quote = styled.p`
    color: var(--lemongrass);
    font-family: "TilliumWeb";
    font-weight: 600;
    position: relative;
    &:before {
        content: " ˮ ";
        font-size: 2.5em;
        transform: rotateX(180deg) rotateY(180deg);
        position: absolute;
        left: -.6em;
        top: -.7em;
    }
`;

export const ReadMore = styled(Link)`
    &&& {
        color: var(--amber);
        font-family: "TTSupermolotNeue";
        font-weight: 600;
        text-decoration: underline;
        float: right;
        :hover {
            color: var(--amber);
            cursor: pointer;
        }
        @media ${device.desktop}{
            font-size: .9em;
            letter-spacing: initial;
        }
    }
`;