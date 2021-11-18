import React from "react";
import { AnimatePresence } from "framer-motion";
import MuiThemeProvider, {
  DEFAULT_MODE,
} from "./src/components/MyComponents/MuiThemeProvider";

export function wrapPageElement({ element }) {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>;
}

export function wrapRootElement({ element }) {
  return (
    <MuiThemeProvider initialValue={DEFAULT_MODE}>{element}</MuiThemeProvider>
  );
}
