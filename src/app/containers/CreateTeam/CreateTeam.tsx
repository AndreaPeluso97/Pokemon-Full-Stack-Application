import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import { CreateTeamForm } from './Form';

const CreateTeamContainer = styled.div`
    ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pl-0
        md:pr-0
        mb-10
    `}
`;

const Title = styled.h2`
    ${tw`
        text-3xl
        lg:text-5xl
        text-black
        font-extrabold
    `}
`;

export function CreateTeam() {
    return (
        <CreateTeamContainer>
            <Title>
                Create Your Team
            </Title>
            <CreateTeamForm/>
        </CreateTeamContainer>
    );
}