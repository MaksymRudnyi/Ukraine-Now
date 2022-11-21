import { Box } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { Language, Nav } from '..';
import bg from '../../../assets/i/bg.jpg';
import store from '../../../store';

export const Sidebar = observer(() => {
  const { isMobileNavigationOpen, setIsMobileNavigationOpen } = store.UI;

  return (
    <>
      <Box
        className={'sidebar'}
        w={[
          '280px',
          '280px',
          '280px',
          '80px',
          isMobileNavigationOpen ? '80px' : '280px',
        ]}
        h={'100vh'}
        display={'flex'}
        zIndex={11}
        overflow={'hidden'}
        position={'absolute'}
        transition={'all .2s'}
        backgroundImage={'linear-gradient(to right, #141e30, #243b55)'}
        color={'white'}
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
        <Box position={'relative'} zIndex={10}>
          <Nav />
          <Language />
        </Box>

        <Box
          bg={`url(${bg})`}
          opacity={0.06}
          position={'absolute'}
          zIndex={9}
          top={0}
          left={0}
          w={'100%'}
          h={'100%'}
        />
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
