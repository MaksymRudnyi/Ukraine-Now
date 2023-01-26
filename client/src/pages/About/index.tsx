import { Helmet } from '../../containers';
import { Box } from '@chakra-ui/react';
import { FC } from 'react';

export const About: FC = () => (
  <>
    <Helmet />
    <Box id={'about'}>About page</Box>
  </>
);
