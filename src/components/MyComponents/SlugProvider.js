import React from "react";
export const SlugContext = React.createContext();

export default function SlugProvider({ children, slug }) {
  return (
    <SlugContext.Provider value={{ slug }}>{children}</SlugContext.Provider>
  );
}

/* The truth source comes from gatsby-node.js, when it creates the page. 
It doesn’t need to get update.
*/
