import React from "react";
import { initializeCookie, setUpCookie } from "../functions/cookie";
import { ThemeProvider } from "@mui/material/styles";
import createMuiTheme from "../../theme/createMuiTheme";
import CssBaseline from "@mui/material/CssBaseline";

const COOKIE_NAME = "MuiThemeMode";
const DEFAULT_MODE = "light";
const SECONDARY_MODE = "dark";
const SUPPORTED_MODES = [DEFAULT_MODE, SECONDARY_MODE];
export const ThemeModeContext = React.createContext();

export default function MuiThemeProvider({ children }) {
  const [themeMode, setThemeMode] = React.useState(DEFAULT_MODE);
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

  /* On attend que le composant soit monté avant de vérifier l’existence du cookie.
  Cela suppose que lorsque les pages html statiques sont créées durant le build
  les composants ne passent pas l’étape du montage. */
  //this useEffect allow to remember themeMode preference
  React.useEffect(() => {
    const initialThemeMode = initializeCookie(
      COOKIE_NAME,
      SUPPORTED_MODES,
      DEFAULT_MODE
    );
    setThemeMode(initialThemeMode);
  }, []);

  return (
    <ThemeModeContext.Provider value={{ themeMode, toggleThemeMode }}>
      <ThemeProvider theme={cachedMuiTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

/* Le ThemeProvider de Mui ne me permet de modifier le theme depuis un composant imbriqué.
C’est pour cela que je créer un second contexte */
