import { Box } from '@chakra-ui/react';
import Hamburger from 'hamburger-react';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { MobileMenu } from '..';
import store from '../../../store';

export const Logo = observer(() => {
  const { isMobileNavigationOpen, setIsMobileNavigationOpen } = store.UI;

  return (
    <>
      <Box
        className={'logo'}
        h={'60px'}
        w={['100%', '100%', '100%', '280px']}
        transition={'width .2s'}
        display={'flex'}
        background={'orange'}
        justifyContent={'space-between'}
      >
        <Box order={[2, 2, 2, 1]}>Logo</Box>
        <Box
          order={[1, 1, 1, 2]}
          display={['block', 'block', 'block', 'none', 'block']}
        >
          <Hamburger
            toggled={isMobileNavigationOpen}
            toggle={setIsMobileNavigationOpen}
          />
        </Box>
        <Box order={[3]} display={['block', 'block', 'block', 'none']}></Box>
      </Box>
    </>
  );
});
