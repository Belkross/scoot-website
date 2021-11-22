import React from "react";
import { PageContext } from "./PageContextProvider";
export const LOCALSTORAGE_KEY = "langue-preference";
export const LocaleContext = React.createContext();

export default function LocaleProvider({ children }) {
  const context = React.useContext(PageContext);

  const [locale, setLocale] = React.useState(context.locale);

  const updateLocale = (selectedLocale) => {
    localStorage.setItem(LOCALSTORAGE_KEY, selectedLocale);
    setLocale(selectedLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, updateLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

/* 
  selectedLocale is always correct because, it comes from buttons "value" props which
  comes from supportedLocale which comes from CMS

  this component need to be nested to PageContextProvider
*/
