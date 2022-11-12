import React from 'react';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../src/styles/themes/default';
import GlobalStyle from '../src/styles/global.ts';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];