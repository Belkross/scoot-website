import React from "react";
import Toolbar from "@mui/material/Toolbar";

function AppBarLateral({ children }) {
  return (
    <Toolbar sx={sx_container} component="header">
      {children}
    </Toolbar>
  );
}

export default AppBarLateral;

const sx_container = {
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  backgroundColor: "background.navBar",
};
