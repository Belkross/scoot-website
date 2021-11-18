import React from "react";

export const LocaleContext = React.createContext();

export default function LocaleProvider({
  children,
  supportedLocales,
  pageLocale,
}) {
  const [locale, setLocale] = React.useState(pageLocale);

  const updateLocale = (selectedLocale) => {
    const selectedLocaleIsCorrect = supportedLocales.find(
      (locale) => locale === selectedLocale
    );
    setLocale(selectedLocaleIsCorrect ? selectedLocale : pageLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, updateLocale, supportedLocales }}>
      {children}
    </LocaleContext.Provider>
  );
}

/* the page load and set up the locale context with pageLocale which comes from
gatsby-node.js. If another locale is selected, the component will update the
cookie where is stored the locale preference. 
*/
