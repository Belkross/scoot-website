const COOKIE_MAX_AGE = 2678400; //1mois

export function setUpCookie(cookieName, cookieValue) {
  document.cookie = `${cookieName}=${cookieValue}; path=/; samesite=strict; secure; max-age=${COOKIE_MAX_AGE}`;
}

//if cookie exist, return its value
//if cookie doesn’t exist, return undefined
export function checkOneCookieExistance(cookieName) {
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

//correct values are regrouped in the array correctValues
export function initializeCookie(cookieName, correctValues, defaultValue) {
  const cookieValue = checkOneCookieExistance(cookieName);
  //if the cookie exist, it returns its value, else it returns undefined
  const cookieValueSuits = correctValues.find((value) => value === cookieValue);
  /* cookie don’t exist, returns undefined
  cookie exist and value not correct, returns undefined
  cookie exist and value correct, returns value */
  if (cookieValueSuits) {
    return cookieValueSuits;
  } else {
    setUpCookie(cookieName, defaultValue);
    return defaultValue;
  }
}
