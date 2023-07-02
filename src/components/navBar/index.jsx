import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import {
    NavBarContainer,
    Title,
    SocialIconsContainer,
    SocialIcon,
} from './style'

export default function NavBar() {
    const openNewTab = (url) => {
        window.open(url, '_blank');
    };

    return (
        <NavBarContainer>
            <Title>
                MARVEL CHALLENGE
            </Title>
            <SocialIconsContainer>
                <SocialIcon onClick={() => openNewTab('https://github.com/yasolar')}>
                    <FaGithub />
                </SocialIcon>
                <SocialIcon onClick={() => openNewTab('https://www.linkedin.com/in/yasmin-araujo-58883276/')}>
                    <FaLinkedin />
                </SocialIcon>
            </SocialIconsContainer>
        </NavBarContainer>
    )
}