import { Helmet } from '../../containers';
import { Box } from '@chakra-ui/react';
import { FC } from 'react';

export const NotFound: FC = () => {
  return (
    <>
      <Helmet />
      <Box
        backgroundColor={['red', 'blue', 'green', 'yellow', 'pink']}
        className="App"
      >
        NotFound page
      </Box>
    </>
  );
};
