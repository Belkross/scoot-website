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

export function initializeCookie(cookieName, correctValues, defaultValue) {
  //if the cookie exist, checkOneCookieExistance returns its value, else it returns undefined
  const cookieValue = checkOneCookieExistance(cookieName);
  const cookieValueSuits = correctValues.find((value) => value === cookieValue);
  
  /* cookie exist and value correct, returns value 
  cookie don’t exist, create the cookie and return default value
  cookie exist and value not correct, set up the cookie with default value and returns it */
  if (cookieValueSuits) {
    return cookieValueSuits;
  } else {
    setUpCookie(cookieName, defaultValue);
    return defaultValue;
  }
}
