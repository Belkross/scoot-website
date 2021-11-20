import React from "react";
export const LOCALSTORAGE_KEY = "langue-preference";
export const DEFAULT_LOCALE = "en"
export const LocaleContext = React.createContext();

export default function LocaleProvider({
  children,
  supportedLocales,
  pageLocale,
}) {
  const [locale, setLocale] = React.useState(pageLocale);

  const updateLocale = (selectedLocale) => {
    localStorage.setItem(LOCALSTORAGE_KEY, selectedLocale);
    setLocale(selectedLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, updateLocale, supportedLocales }}>
      {children}
    </LocaleContext.Provider>
  );
}

/* 
  selectedLocale is always correct because, it comes from buttons "value" props which
  comes from supportedLocale which comes from CMS
*/
