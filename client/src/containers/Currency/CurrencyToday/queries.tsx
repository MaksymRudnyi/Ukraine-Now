import { gql } from '@apollo/client';

export const GET_CURRENCY_FOR_TODAY = gql`
    query GetCurrencyForToday {
        currencyToday {
            exchangedate
            cc
            txt
            r030
            rate
        }
    }
`;
