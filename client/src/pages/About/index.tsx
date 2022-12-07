import { Helmet } from '../../containers';
import { Box } from '@chakra-ui/react';
import { FC } from 'react';

export const About: FC = () => (
  <>
    <Helmet />
    <Box
      backgroundColor={['red', 'blue', 'green', 'yellow', 'pink']}
      className="App"
    >
      About page
    </Box>
  </>
);
