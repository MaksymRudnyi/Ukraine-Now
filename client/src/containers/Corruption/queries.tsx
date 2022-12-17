import { gql } from '@apollo/client';

export const GET_CORRUPTION = gql`
    query GetCorruption {
        corruption {
            iso3
            rank
            score
            region
            year
            country
        }
    }
`;
