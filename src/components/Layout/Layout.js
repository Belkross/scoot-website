import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../../theme/themeFinal";
import HtmlAttributesAndHead from "./HtmlAttributesAndHead";
import Header from "./Header";
import Footer from "./Footer";
import { useStaticQuery, graphql } from "gatsby";

function Layout({ children }) {
  const data = useStaticQuery(query);
  const { header: content } = data.contentYaml;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HtmlAttributesAndHead />
      <Header content={content} />
      {children}
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;

const query = graphql`
  query component_layout {
    contentYaml {
      header {
        logo
        mainAction
        tabs {
          tab1 {
            name
            url
          }
          tab2 {
            name
            url
          }
          tab3 {
            name
            url
          }
          tab4 {
            name
            url
          }
        }
      }
    }
  }
`;
