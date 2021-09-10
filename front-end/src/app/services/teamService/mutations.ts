import { gql } from '@apollo/client';

export const addTeam = gql`
  mutation createTeams($team: TeamInput!) {
    createTeams(input: $team)  {
        id
    }
  }
`;

export const newPokemon = gql`
mutation addPokemon($id: String!, $pokemon: Pokemon!) { 
  addPokemon(id: $id , pokemon: $pokemon) {
    name
  }
}
`;
