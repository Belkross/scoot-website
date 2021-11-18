import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import createMuiTheme from "../../theme/createMuiTheme";
import CssBaseline from "@mui/material/CssBaseline";
import { setUpCookie } from "../../functions/cookie";

export const COOKIE_NAME = "MuiThemeMode";
export const DEFAULT_MODE = "light";
const SECONDARY_MODE = "dark";
export const SUPPORTED_MODES = [DEFAULT_MODE, SECONDARY_MODE];
export const ThemeModeContext = React.createContext();

export default function MuiThemeProvider({ children, initialValue }) {
  const [themeMode, setThemeMode] = React.useState(initialValue);
  const cachedMuiTheme = React.useMemo(
    () => createMuiTheme(themeMode),
    [themeMode]
  );

  const toggleThemeMode = () => {
    setThemeMode((previousThemeMode) => {
      const newThemeMode =
        previousThemeMode === DEFAULT_MODE ? SECONDARY_MODE : DEFAULT_MODE;
      setUpCookie(COOKIE_NAME, newThemeMode);
      return newThemeMode;
    });
  };

  return (
    <ThemeModeContext.Provider value={{ themeMode, toggleThemeMode }}>
      <ThemeProvider theme={cachedMuiTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

/*
The cookie is initialized onClientEntry() in gatsby-browser. There you can access to 
window.document

you need to synchronyze the cookie with a local state otherwise, the component don’t
update on themeMode change. Components updates only with props or lacal state change.

To avoid this component to render everytime a page loads, it is used with wrapRootElement
instead of wrapPageElement.
During buildtime (gatsby-ssr.js), window.document is not available, so initial value 
should be DEFAULT_VALUE.
During runtime (gatsby-browser.js), initial value should be the one stored in the cookie
*/
