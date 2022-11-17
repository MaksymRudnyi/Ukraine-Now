import { Box } from '@chakra-ui/react';
import { FC } from 'react';

export const Home: FC = () => (
  <Box
    backgroundColor={['red', 'blue', 'green', 'yellow', 'pink']}
    className="App"
  >
    Home page
  </Box>
);
