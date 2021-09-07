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
const { name, base_experience, abilities, types, thumbnailSrc } = props;

return (
    <PokemonContainer>
        <PokemonThumbnail>
            <img src={thumbnailSrc} alt="pokemon"/>
        </PokemonThumbnail>
        {name && (<p><b>Name:</b> {name}</p>)}
        {base_experience && (<p><b>Base Experience:</b> {base_experience}</p>)}
        {abilities && (<p><b>Abilities: </b>{abilities.map((el: any)=> el.ability.name).join(', ')}</p>)}
        {types && (<p><b>Types: </b>{types.map((el: any)=> el.type.name).join(', ')}</p>)}
    </PokemonContainer>
);
}