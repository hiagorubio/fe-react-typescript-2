import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from 'react';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 420,
      md: 800,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#262626',
    },
    secondary: {
      main: '#999999',
    },
  },
});

interface OwnProps {
  children: React.ReactNode;
}

export default function Theme({ children }: OwnProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
