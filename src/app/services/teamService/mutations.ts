import { gql } from '@apollo/client';

export const addTeam = gql`
  mutation createTeams($team: TeamInput!) {
    createTeams(input: $team)  {
        name
    }
  }
`;
