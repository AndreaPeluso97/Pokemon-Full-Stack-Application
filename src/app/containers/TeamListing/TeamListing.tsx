import {Dispatch, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ITeam } from '../../../typings/team';
import { Team } from '../../components/team';
import teamService from '../../services/teamService';
import { GetTeams_teams } from '../../services/teamService/__generated__/GetTeams';
import { makeSelectTeams } from './selectors';
import { setTeams } from './slice';
import MoonLoader from 'react-spinners/MoonLoader'

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

const EmptyTeams = styled.div`
    ${tw`
        w-full
        flex
        items-center
        justify-center
        text-gray-500
    `}
`;

const LoadingContainer = styled.div`
    ${tw`
        w-full
        mt-9
        flex
        items-center
        justify-center
        text-base
        text-black 
    `}
`;

const actionDispatch = (dispatch: Dispatch<any>) => ({
    setTeams: (teams: GetTeams_teams[]) => dispatch(setTeams(teams))
});

const stateSelector = createSelector(makeSelectTeams, (teams) => ({
    teams
}))

const wait = (timeout: number) => new Promise((rs) => setTimeout(rs, timeout))

export function TeamListing() {

    const [isLoading, setLoading] = useState(false);

    const { teams } = useSelector(stateSelector);

    const { setTeams } = actionDispatch(useDispatch());

    const fetchTeams = async () => {
        setLoading(true)
        const teams = await teamService.getTeams().catch((err) => {
            console.log("Errors: ", err)
        });

        // used to testing if loading components works
        // await wait(5000);

        console.log("Teams: ", teams)
        if (teams) setTeams(teams);
        setLoading(false);
    }

    useEffect(() => {
        fetchTeams();
    }, []);

   //testing
   /* const testTeam: ITeam = {
        name: 'my team',
        thumbnailSrc: 'https://pbs.twimg.com/profile_images/559036316185133057/uwV6znsv.png'
    } */

    const isEmptyTeams = !teams || teams.length === 0;

    const teamsComponents = 
        (!isEmptyTeams && teams.map(
            (team) => <Team {...team} thumbnailSrc="https://pbs.twimg.com/profile_images/559036316185133057/uwV6znsv.png"/>
            )
        ) || [];

    if (isEmptyTeams) 
            return null;

    return (
        <TeamListingContainer>
            <Title>
                Your Teams:
            </Title>
            {isLoading && (
                <LoadingContainer>
                    <MoonLoader loading size={20}/>
                </LoadingContainer>
            )}
            {isEmptyTeams && !isLoading && <EmptyTeams>No Teams To Show!</EmptyTeams>}
            {!isEmptyTeams  && !isLoading && <TeamContainer>
                {teamsComponents}
            </TeamContainer>}
        </TeamListingContainer>
    );
}