import { Box } from '@chakra-ui/react';
import MetisMenu from 'react-metismenu';
import {
  ChartsNav,
  ComponentsNav,
  FormsNav,
  MainNav,
  WidgetsNav,
} from './items';

export const Nav = () => {
  return (
    <Box className={'nav'}>
      <h5 className="app-sidebar__heading">PRO VERSION</h5>
      <div className="metismenu vertical-nav-menu">
        <ul className="metismenu-container">
          <li className="metismenu-item">
            <i className="metismenu-icon pe-7s-diamond"></i>
            Upgrade to PRO
          </li>
        </ul>
      </div>
      <h5 className="app-sidebar__heading">Menu</h5>
    </Box>
  );
};
