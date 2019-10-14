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
    li {
        margin-bottom: 0;
    }
    @media ${device.desktop}{
        font-size: .9em;
        letter-spacing: initial;
}
`;

export const ListOl = styled.ol`
    color: var(--lemongrass);
    font-family: "TilliumWeb";
    font-size: 1.1em;
    letter-spacing: var(--lp3);
    text-align: left;
    counter-reset: li;
    list-style: none;
    li {
        counter-increment: li;
        margin-bottom: 0;
    }
    li:before {
        font-family: "TTSupermolotNeue";
        content: ". " counter(li); 
        color: var(--amber);
        display: inline-block; 
        width: 1.6em;
        margin-left: -1.5em;
        margin-right: .5em;
        text-align: right;
        direction: rtl;
    }
    @media ${device.desktop}{
        font-size: .9em;
        letter-spacing: initial;
}
`;

export const PaddedContentBox = styled.div`
    padding-bottom: 1.5em;
    padding-top: 1.5em;
    padding-left: 1em;
    padding-right: 1em;
    @media ${device.desktop}{
        transform: ${props => props.skewedOnDesktop ? "skewX(-12deg)" : ""};
    }
`;

export const PaddedText = styled.div`
    @media ${device.desktop}{
        padding: 0 1em;
    }
`;


export const Paragraph = styled.p`
    font-family: "TilliumWeb";
    color: var(--lemongrass);
    letter-spacing: var(--lp3);
    font-size: 1.1em;
    line-height: 1.3em;
    strong {
        color: var(--amber);
    }
    @media ${device.desktop}{
        font-size: .87em;
        letter-spacing: initial;
        text-align-last: ${props => props.lastLineRightDesktop ? "end" : "" };
        transform: ${props => props.reversedSkew ? "skewX(7deg)" : ""};
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
        font-size: ${props => props.sm ? "2.5em" : "3.5em" };
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