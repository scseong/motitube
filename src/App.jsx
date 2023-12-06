import React from 'react';
import GlobalStyles from 'styles/GlobalStyles';
import Router from 'shared/Router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from 'styles/theme';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

