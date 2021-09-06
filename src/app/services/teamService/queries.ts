import gql from "graphql-tag";

export const GET_ALL_TEAMS = gql`
    query GetTeams {
        teams {
            id
            name
        }
    }
`;