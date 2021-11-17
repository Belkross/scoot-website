import React from "react";
import { motion } from "framer-motion";

function PageTransition({ children }) {
  return (
    <motion.main //crée une balise main
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        type: "spring",
        mass: 0.35,
        stiffness: 75,
        duration: 0.2,
      }}
      style={sx_container}
    >
      {children}
    </motion.main>
  );
}

export default PageTransition;

const sx_container = {
  // to make sure footer always well positioned
  flexGrow: 1,
  //to make sure when content is centered when <main> stretch
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "center",
  // to make sure footer don’t stick header
  minHeight: "200px",
};
