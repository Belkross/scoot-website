import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import createMuiTheme from "../../theme/createMuiTheme";
import CssBaseline from "@mui/material/CssBaseline";
import { setUpCookie, checkOneCookieExistance } from "../../functions/cookie";

export const COOKIE_NAME = "MuiThemeMode";
export const DEFAULT_MODE = "light";
const SECONDARY_MODE = "dark";
export const SUPPORTED_MODES = [DEFAULT_MODE, SECONDARY_MODE];
export const ThemeModeContext = React.createContext();

export default function MuiThemeProvider({ children }) {
  const [themeMode, setThemeMode] = React.useState(
    checkOneCookieExistance(COOKIE_NAME)
  );
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
The cookie is initilized onClientEntry() in gatsby-browser. There you can access to 
window.document

you need to synchronyze the cookie with a local state otherwise, the component don’t
update on themeMode change. Components updates only with props or lacal state change.
*/
