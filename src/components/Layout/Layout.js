import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../../theme/themeFinal";
import HtmlAttributesAndHead from "./HtmlAttributesAndHead";
import AppBarTop from "./AppBarTop";

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HtmlAttributesAndHead />
      <AppBarTop />
      {children}
    </ThemeProvider>
  );
}

export default Layout;
