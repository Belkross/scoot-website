import React from "react";
const primaryLangue = "fr";
const secondaryLangue = "en";
export const LangueContext = React.createContext();

function LangueProvider({ children }) {
  const [langue, setLangue] = React.useState(primaryLangue);

  const toggleLangue = () => {
    setLangue((previousLangue) => {
      return previousLangue === primaryLangue ? secondaryLangue : primaryLangue;
    });
  };

  return (
    <LangueContext.Provider value={{ langue, toggleLangue }}>
      {children}
    </LangueContext.Provider>
  );
}

export default LangueProvider;
