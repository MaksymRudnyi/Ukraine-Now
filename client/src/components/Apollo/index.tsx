import React, {useMemo, FC, ReactElement} from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider as ApolloClientProvider, createHttpLink } from '@apollo/client';
type ApolloProvider = {
  config?: Object;
  children: ReactElement
}

export const ApolloProvider: FC<ApolloProvider> = ({ config = {}, children }) => {

    const apolloClient = useMemo(() => {
        const httpLink = createHttpLink({
            uri: `${process.env.REACT_APP_API_HOST}/graphql`
        });

        return (
            new ApolloClient({
                uri: 'graphql',
                cache: new InMemoryCache(),
                link: httpLink,
                ...config
            })
        );
    }, [config]);

    return (
        <ApolloClientProvider client={apolloClient}>
            {children}
        </ApolloClientProvider>
    );
};