import { Box, BoxProps } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

type PaperProps = {
  children: ReactElement;
} & BoxProps;

export const Paper: FC<PaperProps> = ({ children, ...boxProps }) => (
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
