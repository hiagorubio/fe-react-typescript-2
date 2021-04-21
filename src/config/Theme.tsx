import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

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
});

interface OwnProps {
  children: React.ReactNode;
}

export default function Theme({ children }: OwnProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
