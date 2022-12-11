import React, {useMemo, FC, ReactElement} from 'react';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache, ApolloProvider as ApolloClientProvider, createHttpLink } from '@apollo/client';
import { getAppCheckToken } from '../../utils/firebase';

type ApolloProvider = {
  config?: Object;
  children: ReactElement
}

export const ApolloProvider: FC<ApolloProvider> = ({ config = {}, children }) => {
    const apolloClient = useMemo( () => {
      const httpLink = createHttpLink({
          uri: `${process.env.REACT_APP_API_HOST}/graphql`
      });

      const authLink = setContext(async (_, { headers }) => ({
        headers: {
          ...headers,
          'X-Firebase-AppCheck': await getAppCheckToken()
        }
      }));

        return (
            new ApolloClient({
                uri: 'graphql',
                cache: new InMemoryCache(),
                link: authLink.concat(httpLink),
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