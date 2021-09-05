import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import { ITeam } from '../../../typings/team';
import { Team } from '../../components/team';

const TeamListingContainer = styled.div`
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

const TeamContainer = styled.div`
    ${tw`
      w-full
      flex
      flex-wrap
      justify-center
      mt-7
      md:mt-10
    `}
`;

export function TeamListing() {

    const testTeam: ITeam = {
        name: 'my team',
        thumbnailSrc: 'https://pbs.twimg.com/profile_images/559036316185133057/uwV6znsv.png'
    }

    return (
        <TeamListingContainer>
            <Title>
                Your Teams:
            </Title>
            <TeamContainer>
                <Team {...testTeam}></Team>
                <Team {...testTeam}></Team>
                <Team {...testTeam}></Team>
                <Team {...testTeam}></Team>
                <Team {...testTeam}></Team>
                <Team {...testTeam}></Team>
            </TeamContainer>
        </TeamListingContainer>
    );
}