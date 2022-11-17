import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import theme from '../../theme';
import { Router } from '../Router';

function Index() {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}

export default Index;
