import { Box } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';
import store from '../store';
import { Header, Sidebar } from './components';

export const Layout = observer(() => {
  const { isMobileNavigationOpen } = store.UI;

  return (
    <>
      <Header />
      <Sidebar />
      <Box
        transition={'all .2s'}
        p={4}
        mt={'60px'}
        paddingLeft={[
          4,
          4,
          4,
          '96px',
          isMobileNavigationOpen ? '96px' : '296px',
        ]}
      >
        <Outlet />
      </Box>
    </>
  );
});
