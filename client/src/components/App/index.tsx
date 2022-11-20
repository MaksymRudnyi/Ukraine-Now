import { ChakraProvider } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useEffect } from 'react';
import i18next from 'i18next';
import { reaction } from 'mobx';
import '../../i18n/config';
import store from '../../store';
import theme from '../../theme';
import { Router } from '../Router';

function App() {
  useEffect(() => {
    reaction(
      () => store.UI.locale,
      (locale) => i18next.changeLanguage(locale)
    );
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}

export default observer(App);
