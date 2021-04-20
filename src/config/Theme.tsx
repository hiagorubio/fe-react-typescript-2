import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({});

interface OwnProps {
  children: React.ReactNode;
}

export default function Theme({ children }: OwnProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
