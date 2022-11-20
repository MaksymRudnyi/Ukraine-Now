import { Box } from '@chakra-ui/react';
import { Language, Logo } from '..';

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
    bg={
      'linear-gradient(90deg, rgba(224,247,255,1) 0%, rgba(222,221,255,1) 100%);'
    }
  >
    <Logo />
    <Language />
  </Box>
);
