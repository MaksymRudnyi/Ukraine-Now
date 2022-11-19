import { Box } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';
import store from '../store';
import { Header, Logo, Sidebar } from './components';

export const Layout = observer(() => {
  const { isMobileNavigationOpen } = store.UI;

  return (
    <>
      <Header />
      <Sidebar />
      <Box
        transition={'all .2s'}
        paddingLeft={
          isMobileNavigationOpen
            ? [0, 0, 0, '80px', '80px']
            : [0, 0, 0, '80px', '280px']
        }
      >
        <Outlet />
      </Box>
    </>
  );
});
