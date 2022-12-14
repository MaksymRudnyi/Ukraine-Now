import logo from '../../../assets/i/logo.png';
import store from '../../../store';
import { Box, Image } from '@chakra-ui/react';
import Hamburger from 'hamburger-react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

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
        justifyContent={'space-between'}
      >
        <Box order={[2, 2, 2, 1]}>
          <Link to={''}>
            <Image src={logo} alt={'Ukraine Now Logo'} h={'60px'} />
          </Link>
        </Box>
        <Box
          order={[1, 1, 1, 2]}
          display={['flex', 'flex', 'flex', 'none', 'flex']}
          alignItems={'center'}
        >
          <Hamburger
            toggled={isMobileNavigationOpen}
            toggle={setIsMobileNavigationOpen}
          />
        </Box>
        <Box
          order={[3]}
          display={['block', 'block', 'block', 'none']}
          w={'48px'}
        ></Box>
      </Box>
    </>
  );
});
