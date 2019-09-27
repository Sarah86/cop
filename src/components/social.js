import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import "./theme.css"

const SocialLink = styled.a`
    color: var(--tapa);
    font-size: 1.5em;
    padding: .4em;
`;

export const LinkedInstagramIcon = () => (
    <SocialLink href="http://www.instagram.com"><FontAwesomeIcon icon={faFacebookF} /></SocialLink>
);

export const LinkedFacebookIcon = () => (
    <SocialLink href="http://www.facebook.com"><FontAwesomeIcon icon={faInstagram} /></SocialLink>
);

export const LinkedYoutubeIcon = () => (
    <SocialLink href="http://www.youtube.com"><FontAwesomeIcon icon={faYoutube} /></SocialLink>
);