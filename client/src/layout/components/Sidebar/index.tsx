import { Box } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { Logo, Nav } from '..';
import store from '../../../store';

export const Sidebar = observer(() => {
  const { isMobileNavigationOpen, setIsMobileNavigationOpen } = store.UI;

  return (
    <>
      <Box
        className={'sidebar'}
        w={
          isMobileNavigationOpen
            ? ['280px', '280px', '280px', '80px', '80px']
            : ['280px', '280px', '280px', '80px', '280px']
        }
        h={'100vh'}
        display={'flex'}
        zIndex={11}
        overflow={'hidden'}
        position={'absolute'}
        transition={'all .2s'}
        backgroundColor={'lightblue'}
        transform={
          isMobileNavigationOpen
            ? 'translateX(0)'
            : [
                'translateX(-280px)',
                'translateX(-280px)',
                'translateX(-280px)',
                'translateX(0)',
              ]
        }
        _hover={{
          w: '280px',
        }}
      >
        <Nav />
      </Box>
      <Box
        className={'sidebar-overlay'}
        onClick={setIsMobileNavigationOpen}
        display={
          isMobileNavigationOpen ? ['block', 'block', 'block', 'none'] : 'none'
        }
        background={'blackAlpha.600'}
        position={'fixed'}
        top={0}
        left={0}
        w={'100%'}
        h={'100%'}
      />
    </>
  );
});
