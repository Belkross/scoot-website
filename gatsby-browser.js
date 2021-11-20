import React from "react";
import "@fontsource/lexend-deca";
import "@fontsource/space-mono";
import { AnimatePresence } from "framer-motion";
import MuiThemeProvider from "./src/components/MyComponents/MuiThemeProvider";

export function wrapPageElement({ element }) {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>;
  //everything that locate between <animatePresence> and <motion.main> is not affected by transitions
}

export function wrapRootElement({ element }) {
  return <MuiThemeProvider>{element}</MuiThemeProvider>;
}
