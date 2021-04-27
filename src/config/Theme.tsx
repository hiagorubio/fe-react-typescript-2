import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from 'react';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      lg: 1280,
      md: 800,
      sm: 420,
      xl: 1920,
      xs: 0,
    },
  },
  palette: {
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
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
const Theme = ({ children }: OwnProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
