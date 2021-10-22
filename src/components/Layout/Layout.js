import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../../theme/themeFinal";
import HtmlAttributesAndHead from "./HtmlAttributesAndHead";
import Container from "@mui/material/Container";

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HtmlAttributesAndHead />
      <Container></Container>
      {children}
    </ThemeProvider>
  );
}

export default Layout;
