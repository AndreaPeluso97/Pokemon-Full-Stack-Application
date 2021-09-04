import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import TournamentLogoImg from "../../../assets/images/tournament-logo.png"

const LogoContainer = styled.div`
    ${tw`
        flex
        items-center  
    `};
`;

const LogoText = styled.div`
    ${tw`
        text-xl
        md:text-2xl
        font-bold
        text-black
        m-1      
    `};
`;

const Image = styled.div`
    ${tw`
        h-6
        md:h-9  
    `};

    img {
        width: auto;
        height: 100%;
    }
`;
export function Logo() {
    return (
        <LogoContainer>
            <Image>
                <img src={TournamentLogoImg} alt="logo"/>
            </Image>
            <LogoText>Pokemon Tournament</LogoText>
        </LogoContainer>
    );
}