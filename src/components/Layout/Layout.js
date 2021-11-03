import React, { useMemo, useState, useEffect } from "react";
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
  const { contentYaml: content } = data;
  //darkMode
  const [themeMode, setThemeMode] = useState("light");
  const cachedMuiTheme = useMemo(() => createMuiTheme(themeMode), [themeMode]);
  const handleToggle_themeMode = () => {
    setThemeMode((previousMode) => {
      const newMode = previousMode === "light" ? "dark" : "light";
      setUpCookie(COOKIE_THEME_MODE_NAME, newMode);
      return newMode;
    });
  };

  /* On attend que le composant soit monté avant de vérifier l’existence du cookie.
  Cela suppose que lorsque les pages html statiques sont créées durant le build
  les composants ne passent pas l’étape du montage. */
  useEffect(() => {
    const newMode = initializeThemeModeCookie(COOKIE_THEME_MODE_NAME);
    setThemeMode(newMode);
  }, []);
  return (
    <ThemeProvider theme={cachedMuiTheme}>
      <CssBaseline />
      <HtmlAttributesAndHead content={data.site.siteMetadata} />
      <ContainerVertical>
        <Header
          content={content.header}
          currentThemeMode={themeMode}
          onThemeModeTrigger={handleToggle_themeMode}
        />
        <PageTransition>{children}</PageTransition>
        <Footer content={content} />
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
        charset
      }
    }
    contentYaml {
      general {
        social_media {
          facebook {
            name
            website
          }
          instagram {
            name
            website
          }
          linkedin {
            name
            website
          }
          twitter {
            name
            website
          }
        }
      }
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
      footer {
        contact {
          address
          mail
          name
        }
        download {
          icon_alt1
          icon_alt2
          title
          icon1 {
            publicURL
          }
          icon2 {
            publicURL
          }
        }
        copyright
      }
    }
  }
`;
