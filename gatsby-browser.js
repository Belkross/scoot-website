import React from "react";
import { AnimatePresence } from "framer-motion";

// tuto page transition : https://janessagarrow.com/blog/gatsby-framer-motion-page-transitions/
export function wrapPageElement({ element }) {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>;
}
