import { Router } from '..';
import { ApolloProvider } from '../../components';
import { useHighchartsTranslations } from '../../hooks/useHighchartsTranslations';
import theme from '../../theme';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

export const App = () => {
  useHighchartsTranslations();

  return (
    <HelmetProvider>
      <ApolloProvider>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
            <Router />
          </ChakraProvider>
        </QueryClientProvider>
      </ApolloProvider>
    </HelmetProvider>
  );
};
