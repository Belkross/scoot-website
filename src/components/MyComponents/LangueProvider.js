import React from "react";
import { initializeCookie, setUpCookie } from "../functions/cookie";
const COOKIE_NAME = "langue";
const DEFAULT_LANGUE = "fr";
export const SUPPORTED_LANGUES = ["fr", "en"]; //scalable
export const LangueContext = React.createContext();

function LangueProvider({ children }) {
  const [langue, setLangue] = React.useState(DEFAULT_LANGUE);

  const toggleLangue = (selectedLangue) => {
    const selectedLangueIsCorrect = SUPPORTED_LANGUES.find(
      (langue) => langue === selectedLangue
    );
    setUpCookie(COOKIE_NAME, selectedLangue);
    setLangue(selectedLangueIsCorrect ? selectedLangue : DEFAULT_LANGUE);
  };

  React.useEffect(() => {
    const initialLangue = initializeCookie(
      COOKIE_NAME,
      SUPPORTED_LANGUES,
      DEFAULT_LANGUE
    );
    setLangue(initialLangue);
  }, []);

  return (
    <LangueContext.Provider value={{ langue, toggleLangue }}>
      {children}
    </LangueContext.Provider>
  );
}

export default LangueProvider;
