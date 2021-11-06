import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

function AppBarTop({ children }) {
  return (
    <AppBar position="sticky" sx={sx_container}>
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
}

export default AppBarTop;

const sx_container = {
  opacity: "0.96",
  backgroundColor: "background.navBar",
  backgroundImage: "none",
};

/*
AppBar is a header markup by default
*/
