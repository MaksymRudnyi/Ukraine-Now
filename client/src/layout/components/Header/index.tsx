import { Box } from '@chakra-ui/react';
import { Language, Logo } from '..';

export const Header = () => (
  <Box
    className={'header'}
    h={'60px'}
    w={'100%'}
    display={'flex'}
    alignItems={'center'}
    alignContent={'center'}
    justifyContent={'space-between'}
    position={'fixed'}
    top={0}
    left={0}
    zIndex={10}
    transition={'all .2s'}
    bg={
      'linear-gradient(90deg, rgba(224,247,255,1) 0%, rgba(222,221,255,1) 100%);'
    }
  >
    <Logo />
    <Box mr={3} display={['none', 'none', 'none', 'block']}>
      <Language />
    </Box>
  </Box>
);
