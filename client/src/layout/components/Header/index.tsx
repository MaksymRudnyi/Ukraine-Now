import { Box } from '@chakra-ui/react';
import { Logo } from '..';

export const Header = () => (
  <Box
    className={'header'}
    h={'60px'}
    display={'flex'}
    alignItems={'center'}
    alignContent={'center'}
    position={'relative'}
    zIndex={10}
    transition={'all .2s'}
    backgroundImage={
      'linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)'
    }
  >
    <Logo />
  </Box>
);
