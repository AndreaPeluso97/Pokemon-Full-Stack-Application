import gql from "graphql-tag";

export const GET_ALL_TEAMS = gql`
    query {
        teams {
        id,    
        name,
        pokemon {
            name,
            base_experience,
            thumbnailSrc,
            abilities{
            name
            },
            types {
            name
            }
        }
        }
    }
`;

export const FILTER_TEAMS = gql`
    query filterTeamsByType($type: String!) { 
        filterTeamsByType(type: $type) {
        id,    
        name,
        pokemon {
            name,
            base_experience,
            thumbnailSrc,
            abilities{
            name
            },
            types {
            name
            }
        }
        }
    }
`;