import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../../theme/themeFinal";
import HtmlAttributesAndHead from "./HtmlAttributesAndHead";


function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HtmlAttributesAndHead />
      {children}
    </ThemeProvider>
  );
}

export default Layout;
