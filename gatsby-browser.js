import React from "react";
import "@fontsource/lexend-deca";
import "@fontsource/space-mono";
import { AnimatePresence } from "framer-motion";
import { initializeCookie } from "./src/functions/cookie";
import MuiThemeProvider from "./src/components/MyComponents/MuiThemeProvider";
import {
  COOKIE_NAME,
  SUPPORTED_MODES,
  DEFAULT_MODE,
} from "./src/components/MyComponents/MuiThemeProvider";
/*the gatsby documentation says that gatsby-browser and gatsby-ssr should share the same content 
related to wrapPageElement and wrapRootElement*/

export function onClientEntry() {
  initializeCookie(COOKIE_NAME, SUPPORTED_MODES, DEFAULT_MODE);
}

export function wrapPageElement({ element }) {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>;
  //everything that locate between <animatePresence> and <motion.main> is not affected by transitions
}

export function wrapRootElement({ element }) {
  return <MuiThemeProvider>{element}</MuiThemeProvider>;
}
