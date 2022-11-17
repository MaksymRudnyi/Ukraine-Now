import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { components } from './components';
import { global } from './global';

// Base Chakra theme:
// https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/theme/src

const breakpoints = {
  base: '0',
  sm: '576px',
  md: '768px',
  lg: "992px",
  xl: '1200px',
  '2xl': '1400px',
};

const theme = extendTheme({
  config: { cssVarPrefix: 'cl' },
  styles: { global },
  colors,
  components,
  breakpoints,
  fonts: {
    body: 'Roboto',
    heading: 'Roboto',
  },
});

export default theme;
