import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import PikachuImg from '../../../assets/images/pikachu.png';
import BlobImg from '../../../assets/images/blob.svg';
import { SCREENS } from '../../components/responsive';
import { Button } from '../../components/button';
import { Link } from 'react-router-dom';

const TopSectionContainer = styled.div`
    margin-top: 6em;
    ${tw`
        w-full
        h-full
        max-w-screen-2xl
        flex
        justify-between
        pl-3
        pr-3  
        lg:pl-12
        lg:pr-12
    `};
`;

const LeftContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
    `};
`;

const RightContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `};
`;

const Slogan = styled.h1`
    ${tw`
        font-bold
        text-2xl
        xl:text-6xl
        sm:text-3xl
        md:text-5xl
        lg:font-black
        md:font-extrabold
        text-black
        mb-4
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
    `};
`;

const Description = styled.p`
    ${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12
        text-gray-800
    `};
`;

const BlobContainer = styled.div`
    width: 200em;
    height: 10em;
    position: absolute;
    right: -5em;
    top: -9em;
    z-index: -1;
    transform: rotate(-30deg);

    img {
        object-fit: cover;
    }

    @media (min-width: ${SCREENS.sm}) {
        width: 40em;
        max-height: 10em;
        right: -9em;
        top: -16em;
        transform: rotate(-25deg);
    }
    
    @media (min-width: ${SCREENS.lg}) {
        width: 50em;
        max-height: 20em;
        right: -7em;
        top: -15em;
        transform: rotate(-30deg);
        object-fit: cover;
    }
    
    @media (min-width: ${SCREENS.xl}) {
        width: 70em;
        max-height: 10em;
        right: -15em;
        top: -25em;
        transform: rotate(-20deg);
    }
`;

const StandalonePokemon = styled.div`
    width: auto;
    height: 10em;
    right: -6em;
    top: -5em;
    position: absolute;

    img {
        width: auto;
        height: 100%;
        max-width: fit-content;
    }

    @media (min-width: ${SCREENS.sm}) {
      height: 16em;
      right: -6em;
      top: -6em;
    }
    
    @media (min-width: ${SCREENS.lg}) {
        height: 21em;
        right: -8em;
        top: -5em;
      }
      
    @media (min-width: ${SCREENS.xl}) {
        height: 30em;
        right: -13em;
        top: -9em;
      }
`;

const ButtonContainer =  styled.div`
    ${tw`
        flex
        flex-wrap
        mt-4
    `};
`;

export function MainSection() {
    return (
        <TopSectionContainer>
            <LeftContainer>
                <Slogan>
                Create your team!
                </Slogan>
                <Description>
                A new pokemon tournament is coming soon and you must create a strong team to try to excel at the competition!
                </Description>
                <ButtonContainer>
                    <Link to="/team/create">
                        <Button text="Create Team"/>
                    </Link>
                    <Link to="/team/list">
                        <Button theme="filled" text="Team Listing"/>
                    </Link>
                </ButtonContainer>
            </LeftContainer>
            <RightContainer>
                <BlobContainer>
                    <img src={BlobImg} alt="blob"></img>
                </BlobContainer>
                <StandalonePokemon>
                    <img src={PikachuImg} alt="pokemon"></img>
                </StandalonePokemon>
            </RightContainer>
        </TopSectionContainer>
    );
}