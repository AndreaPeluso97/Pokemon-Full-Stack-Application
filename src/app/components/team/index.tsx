import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ITeam } from '../../../typings/team';
import { Button } from '../button';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { SCREENS } from '../responsive';
import { useMediaQuery } from 'react-responsive';
import { Pokemon } from '../pokemon';
import { Link } from 'react-router-dom';

interface ITeamProps extends ITeam {}

const TeamContainer = styled.div`
    width: 16.5em;
    min-height: 23em;
    box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
    ${tw`
        flex
        flex-col
        items-center
        p-3
        pb-4
        bg-white
        rounded-md
        m-1
        sm:m-3
        md:m-6
    `};
`;

const TeamThumbnail = styled.div`
    width:100%;
    height:auto;

    img {
        width:100%:
        height:100%;
    }
`;

const TeamName = styled.h3`
    ${tw`
        text-base
        font-bold
        text-black
        mt-1
        mb-1
    `}
`;

const Separator = styled.div`
    min-width: 100%;
    min-height: 1px;
    ${tw`
        flex
        bg-gray-300
        mt-2
        mb-2
    `}
`;



const BaseExperience = styled.div`
    ${tw`
        text-black
        mt-1
        mb-1
    `}
`;

const Types = styled.div`
    ${tw`
        mt-1
        mb-1
    `}
`;

const EditButton = styled(Button)`
    ${tw`
        min-w-full
        mt-5
    `}
`;

export function Team(props: ITeamProps) {
    const { _id , name, pokemons} = props;
    const [current, setCurrent] = useState(0);
    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
    /*
    const TestPokemon1 : IPokemon = {
        thumbnailSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    }

    const TestPokemon2 : IPokemon = {
        thumbnailSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    }
    */
    const pokemonsComponents = 
    (pokemons.length > 0 && pokemons.map(
        (pokemon: any) =>  <Pokemon
                                thumbnailSrc={pokemon.thumbnailSrc}/>
        )
    ) || [];

    const totalBaseExperience = pokemons.map((pokemon: any) => pokemon.base_experience).reduce((a, c) => { return a + c });
    const numberOfDots = isMobile ? pokemons.length : Math.ceil(pokemons.length / 1);

  

    return (
        <TeamContainer>
            <TeamThumbnail>
                <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30161640/1329-768x591.png"
                     alt="team"/>
            </TeamThumbnail>
            <TeamName>{name}</TeamName>
            <Separator/>
            <Carousel 
                value={current} 
                slides={
                    pokemonsComponents
                }
                plugins={[
                    'clickToChange',
                    {
                        resolve: slidesToShowPlugin,
                        options: 
                        {
                            numberOfSlides: 3
                        }
                    }
                ]}
                breakpoints={{
                    640: {
                      plugins: [
                        {
                          resolve: slidesToShowPlugin,
                          options: {
                            numberOfSlides: 1,
                          },
                        },
                      ],
                    },
                    900: {
                      plugins: [
                        {
                          resolve: slidesToShowPlugin,
                          options: {
                            numberOfSlides: 2,
                          },
                        },
                      ],
                    },
                  }}
                onChange={setCurrent}/>
            <Dots value={current} onChange={setCurrent} number={numberOfDots} />
            <Separator/>
            <BaseExperience>
                  Total Base Experience: {totalBaseExperience}
            </BaseExperience>
            <Types>
                {pokemons.map((pokemon: any) => pokemon.types && (<p><b>{pokemon.name} Types: </b>{pokemon.types.map((type: any)=> type.name).join(', ')}</p>))}
            </Types>
            <Link to={"/team/" + _id + "/edit"}>
                <EditButton text="Edit"/>
            </Link>
        </TeamContainer>
    );
}