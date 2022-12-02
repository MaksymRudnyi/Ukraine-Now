import { Box } from '@chakra-ui/react';

export const BorderBox = ({ children }) => {
  return (
    <Box border={'1px solid'} borderColor={'gray.200'} borderRadius={10} p={2}>
      {children}
    </Box>
  );
};
