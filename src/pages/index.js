import React from "react";
import { navigate } from "gatsby";
import {
  LOCALSTORAGE_KEY,
  DEFAULT_LOCALE,
} from "../components/MyComponents/LocaleProvider";

export default function PageIndex() {
  React.useEffect(() => {
    const browserLanguePreference = localStorage.getItem(LOCALSTORAGE_KEY);
    const localePrefix = browserLanguePreference || DEFAULT_LOCALE;
    navigate(`/${localePrefix}/home`);
  }, []);

  return <div></div>;
}
