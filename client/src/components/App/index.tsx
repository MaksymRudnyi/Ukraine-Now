import React from 'react';
import { Box } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../../theme';

function Index() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        backgroundColor={['red', 'blue', 'green', 'yellow', 'pink']}
        className="App"
      >
        app 2
      </Box>
    </ChakraProvider>
  );
}

export default Index;
