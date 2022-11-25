import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { Router } from '..';
import theme from '../../theme';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
};
