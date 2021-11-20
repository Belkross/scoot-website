import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import createMuiTheme from "../../theme/createMuiTheme";
import CssBaseline from "@mui/material/CssBaseline";

const LOCALSTORAGE_KEY = "theme-preferencee";
const DEFAULT_MODE = "light";

export const ThemeModeContext = React.createContext();

export default function MuiThemeProvider({ children }) {
  const [themeMode, setThemeMode] = React.useState(DEFAULT_MODE);
  const cachedMuiTheme = React.useMemo(
    () => createMuiTheme(themeMode),
    [themeMode]
  );

  const toggleThemeMode = () => {
    setThemeMode((previousThemeMode) => {
      const newThemeMode = previousThemeMode === "light" ? "dark" : "light";
      localStorage.setItem(LOCALSTORAGE_KEY, newThemeMode);
      return newThemeMode;
    });
  };

  //don’t occured server side
  React.useEffect(() => {
    const browserPreference = localStorage.getItem(LOCALSTORAGE_KEY);
    const OSPreference = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : undefined;
    setThemeMode(browserPreference || OSPreference || DEFAULT_MODE);
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

/*
you need to synchronyze the client preference with a local state otherwise, 
the component don’t update on themeMode change.

To avoid this component to render everytime a page loads, it is used with wrapRootElement
instead of wrapPageElement.

if a user has a preference for dark mode set up: 
When a user request the location.origin, he will get the page index.js which will redirect
him to the template locale/home. This will let the time to the app to check client’s theme
mode preference and deliver a first page without flash

if the client start a session directly with a certain page, there will be a flash, because
pages are delivered the way the were server-side first. Then MuiThemeProvider get mounted,
check for the preference, and then setThemeMode.

To avoid the flash, one solution (not possible with Mui) is to add a class to the root
element before the page is delivered. All components have to depend to the root css variables
more details here : https://victorzhou.com/blog/dark-mode-gatsby/
*/
