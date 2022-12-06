import { Router } from '..';
import { ApolloProvider } from '../../components';
import { useHighchartsTranslations } from '../../hooks/useHighchartsTranslations';
import theme from '../../theme';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const queryClient = new QueryClient();

export const App = () => {
  useHighchartsTranslations();

  return (
    <ApolloProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Router />
        </ChakraProvider>
      </QueryClientProvider>
    </ApolloProvider>
  );
};
