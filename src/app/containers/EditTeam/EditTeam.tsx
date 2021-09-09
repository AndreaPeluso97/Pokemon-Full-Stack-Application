import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import { CreateTeamForm } from '../CreateTeam/Form';

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

export function EditTeam() {

    const params: any = useParams();

    return (
        <CreateTeamContainer>
            <Title>
                Edit Your Team
            </Title>
            <CreateTeamForm type="edit" teamId={params.teamId}/>
        </CreateTeamContainer>
    );
}