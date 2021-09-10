import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import { SCREENS } from '../../components/responsive';
import MeImg from '../../../assets/images/me.jpg'

const AboutMeContainer = styled.div`
    position: absolute;
    bottom: 0;
    ${tw`
        w-full
        flex
        flex-wrap
        items-center
        2xl:justify-center
        pt-4
        pb-4
        pr-7
        pl-7
        md:pl-0
        md:pr-0
        bg-white
        mb-0
    `};
`;

const PhotoContainer = styled.div`
    width: auto;
    height: 15em;
    margin-left: -30px;
    
    img {
        width: auto;
        height: 100%;
        border-top-right-radius: 50%;
    }

    @media (min-width: ${SCREENS.md}) {
        height:28em;
    }

    
    @media (min-width: ${SCREENS.lg}) {
        height:30em;
    }

    
    @media (min-width: ${SCREENS['2xl']}) {
        height:35em;
        margin-left:0;
    }
`;

const InfoContainer = styled.div`
    ${tw`
        md:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `};
`;

const Title = styled.div`
    ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `};
`;

const InfoText = styled.p`
    ${tw`
        md:max-w-2xl
        text-sm
        md:text-base
        text-gray-500
        mt-4
        font-normal
    `};
`;

export function AboutMe() {

    return (
        <AboutMeContainer>
            <PhotoContainer>
                <img src={MeImg} alt="me"/>
            </PhotoContainer>
            <InfoContainer>
                <Title>About Me</Title>
                <InfoText>
                    <p>Hi, let me introduce myself.</p>
                    <p>I'm Andrea Peluso and my great passion is to create.</p>
                    <p>So I chose to study the magical world of programming.</p> 
                    <p>Programming relaxes me and satisfies me.</p>
                    <p>This application was built with React.js and Node.js, let me know if you like it!</p>
                </InfoText>
            </InfoContainer>
        </AboutMeContainer>
    );
}