import React, { useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createMuiTheme from "../../theme/createMuiTheme";
import HtmlAttributesAndHead from "./HtmlAttributesAndHead";
import Header from "./Header";
import Footer from "./Footer";
import { initializeThemeModeCookie, setUpCookie } from "../functions/cookie";
import { useStaticQuery, graphql } from "gatsby";
import PageTransition from "./PageTransition";
import ContainerVertical from "./ContainerVertical";
const COOKIE_THEME_MODE_NAME = "MuiThemeMode";

function Layout({ children }) {
  const data = useStaticQuery(query);
  const { header: content } = data.contentYaml;
  //darkMode
  const [themeMode, setThemeMode] = useState(
    initializeThemeModeCookie(COOKIE_THEME_MODE_NAME)
  );
  const cachedMuiTheme = useMemo(() => createMuiTheme(themeMode), [themeMode]);
  const handleToggle_themeMode = () => {
    setThemeMode((previousMode) => {
      const newMode = previousMode === "light" ? "dark" : "light";
      setUpCookie(COOKIE_THEME_MODE_NAME, newMode);
      return newMode;
    });
  };

  return (
    <ThemeProvider theme={cachedMuiTheme}>
      <CssBaseline />
      <HtmlAttributesAndHead content={data.site.siteMetadata} />
      <ContainerVertical>
        <Header
          content={content}
          currentThemeMode={themeMode}
          onThemeModeTrigger={handleToggle_themeMode}
        />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </ContainerVertical>
    </ThemeProvider>
  );
}

export default Layout;

const query = graphql`
  query component_layout {
    site {
      siteMetadata {
        description
        title
      }
    }
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
