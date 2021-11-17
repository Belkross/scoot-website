import React from "react";
import { initializeCookie, setUpCookie } from "../functions/cookie";
const COOKIE_NAME = "locale";
const DEFAULT_LOCALE = "fr";
export const LocaleContext = React.createContext();

export default function LocaleProvider({ children, supportedLocales }) {
  const [locale, setLocale] = React.useState(DEFAULT_LOCALE);
  /* idealy, I would initialize locale with the value stored in the cookie
  but with static behavior, it is not possible to access to document.cookie 
  before the component get mounted. When the user get to the website, there
  is a brief moment where the DEFAULT_LOCALE will be seen*/

  const updateLocale = (selectedLocale) => {
    const selectedLocaleIsCorrect = supportedLocales.find(
      (locale) => locale === selectedLocale
    );
    setUpCookie(COOKIE_NAME, selectedLocale);
    setLocale(selectedLocaleIsCorrect ? selectedLocale : DEFAULT_LOCALE);
  };

  React.useEffect(() => {
    const initialLocale = initializeCookie(
      COOKIE_NAME,
      supportedLocales,
      DEFAULT_LOCALE
    );
    setLocale(initialLocale);
  }, [supportedLocales]);

  return (
    <LocaleContext.Provider value={{ locale, updateLocale, supportedLocales }}>
      {children}
    </LocaleContext.Provider>
  );
}
