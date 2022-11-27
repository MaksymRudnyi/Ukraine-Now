import { Router } from '..';
import theme from '../../theme';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
};
