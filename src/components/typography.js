import styled from "styled-components"
import { device } from "./device";

export const Paragraph = styled.p`
    font-family: "TilliumWeb";
    color: var(--lemongrass);
    letter-spacing: var(--lp3);
    @media ${device.desktop}{
        font-size: .9em;
        letter-spacing: initial;
    }
`;

export const ParagraphLink = styled.a`
    &&& {
        color: var(--amber);
        font-weight: 600;
        text-decoration: underline;
        :hover {
            color: var(--amber);
            cursor: cell;
        }
    }
`;

export const ParagraphTitle = styled.h2`
    font-family: var(--font2);
    font-weight: 300 ;
    color: var(--amber);
    font-size: 3.5em;
    font-size: ${props => props.size};
    letter-spacing: var(--lp1);
    line-height: .95em;
    width: ${props => props.width};
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

export const ReadMore = styled.a`
    &&& {
        color: var(--amber);
        font-family: "TTSupermolotNeue";
        font-weight: 600;
        text-decoration: underline;
        float: right;
        :hover {
            color: var(--amber);
            cursor: cell;
        }
        @media ${device.desktop}{
            font-size: .9em;
            letter-spacing: initial;
        }
    }
`;