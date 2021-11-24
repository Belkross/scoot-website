import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export default function AppBarTop({ children }) {
  return (
    <AppBar position="sticky" sx={sx_container}>
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
}

const sx_container = {
  backgroundColor: "background.navBar",
  backgroundImage: "none",
  mb: { xs: 4, md: 6, lg: 8 },
};

/*AppBar is a header markup by default*/
