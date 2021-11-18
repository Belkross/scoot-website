import React from "react";
import { AnimatePresence } from "framer-motion";
import "@fontsource/lexend-deca";
import "@fontsource/space-mono";

// tuto page transition : https://janessagarrow.com/blog/gatsby-framer-motion-page-transitions/
export function wrapPageElement({ element }) {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>;
  //all pages are now wrapped with this component
  //tout ce qui se trouve entre <animatePresence> et <motion.main> n’est pas affecté par les transitions
}
