import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import theme from '../src/theme';
import '@fontsource/roboto';
import '../src/i18n/config';
import './styles.css';

const queryClient = new QueryClient();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme,
  },
};

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  ),
];
