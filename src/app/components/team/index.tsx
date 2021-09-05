import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ITeam } from '../../../typings/team';
import { Button } from '../button';

interface ITeamProps extends ITeam {

}

const TeamContainer = styled.div`
    width: 16.5em;
    min-height: 23em;
    max-height: 23em;
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

const EditButton = styled(Button)`
    ${tw`
        min-w-full
        mt-5
    `}
`;

export function Team(props: ITeamProps) {
    const { name, thumbnailSrc } = props;

    return (
        <TeamContainer>
            <TeamThumbnail>
                <img src={thumbnailSrc} alt="team"></img>
            </TeamThumbnail>
            <TeamName>{name}</TeamName>
            <EditButton text="Edit"/>
        </TeamContainer>
    );
}