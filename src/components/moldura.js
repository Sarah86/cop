import styled from "styled-components"
import { device } from "./device";

export const MolduraTop = styled.div`
    background-color: var(--firefly);    
    position: absolute;
    transform: skewX(-50deg);
    height: 4px;
    width: 40%;
    left: -1.5px;
    @media ${device.desktop}{
        height: 15px;
        left: -1em;
        top: 0;
    }
`;

export const MolduraBottom = styled.div`
    background-color: var(--firefly);    
    height: 4px;
    width: 30%;
    position: absolute;
    bottom: 8px;
    right: 0;
    transform: skewX(-50deg);
    @media ${device.desktop}{
        height: 15px;
        bottom: -1px;
        right: -1em;
    }
`;