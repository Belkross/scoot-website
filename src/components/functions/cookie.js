const COOKIE_MAX_AGE = 2678400; //1mois

export function setUpCookie(cookieName, cookieValue) {
  document.cookie = `${cookieName}=${cookieValue}; path=/; samesite=strict; secure; max-age=${COOKIE_MAX_AGE}`;
}

export function checkOneCookieExistance(cookieName) {
  if (document === undefined) return undefined; //no access to document with ssr
  const string_cookies = document.cookie;
  const atLeastOneCookieExist = string_cookies === "" ? false : true;

  if (atLeastOneCookieExist) {
    const modele = `^${cookieName}`;
    const regex = new RegExp(modele);
    const array_cookies = string_cookies.split("; ");
    const searchedCookie = array_cookies.find((cookie) => regex.test(cookie));

    if (searchedCookie !== undefined) {
      return searchedCookie.split("=")[1];
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}

// vérifie l’existence du cookie en argument,
// configure le cookie quoi qu’il arrive et retourne la valeur configurée
export function initializeThemeModeCookie(cookieName) {
  const currentThemeModeCookie = checkOneCookieExistance(cookieName);
  if (currentThemeModeCookie === "dark") {
    return "dark";
  } else {
    setUpCookie(cookieName, "light");
    return "light";
  }
}
