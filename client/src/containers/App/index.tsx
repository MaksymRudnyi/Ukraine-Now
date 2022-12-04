import { Router } from '..';
import theme from '../../theme';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { ApolloProvider } from "../../components";

const queryClient = new QueryClient();

export const App = () => {
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
