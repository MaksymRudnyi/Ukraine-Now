import theme from '../../theme';
import { Router } from '../Router';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}

export default App;
