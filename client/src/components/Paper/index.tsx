import { Box, BoxProps } from '@chakra-ui/react';
import { FC } from 'react';

export const Paper: FC<BoxProps> = ({ children, ...boxProps }) => (
  <Box
    border={'1px solid'}
    bgColor={'white'}
    borderColor={'gray.200'}
    overflow={'hidden'}
    borderRadius={8}
    {...boxProps}
  >
    {children}
  </Box>
);
