import React from 'react';
import { IPokemon } from '../../../typings/pokemon';
import styled from 'styled-components';
import tw from 'twin.macro';

interface IPokemonProps extends IPokemon {}

const PokemonContainer = styled.div`
    ${tw`
        items-center
    `};
`;

const PokemonThumbnail = styled.div`
    width:100%;
    height:auto;

    img {
        width:100%:
        height:100%;
    }
`;

export function Pokemon(props: IPokemonProps) {
const { thumbnailSrc } = props;

return (
    <PokemonContainer>
        <PokemonThumbnail>
            <img src={thumbnailSrc} alt="pokemon"/>
        </PokemonThumbnail>
    </PokemonContainer>
);
}