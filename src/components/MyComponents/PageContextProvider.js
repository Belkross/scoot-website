import React from "react";

export const PageContext = React.createContext();

export default function PageContextProvider({ pageContext, children }) {
  const { locale, slug, supportedLocales, DEFAULT_LOCALE, ORIGIN_SLUG } =
    pageContext;

  const getPathname = (locale, slug) => {
    const localePrefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
    const pathSlug = slug === ORIGIN_SLUG ? "" : `/${slug}`;
    const pathname = localePrefix + pathSlug;
    return pathname === "" ? "/" : pathname;
    /* if locale = DEFAULT_LOCALE AND slug = ORIGIN_SLUG, navigate won’t work
    because it need at least a "/" to go to origin*/
  };

  return (
    <PageContext.Provider
      value={{ locale, slug, supportedLocales, DEFAULT_LOCALE, ORIGIN_SLUG, getPathname }}
    >
      {children}
    </PageContext.Provider>
  );
}
