import gql from "graphql-tag";

export const GET_ALL_TEAMS = gql`
    query {
        teams {
        _id,    
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