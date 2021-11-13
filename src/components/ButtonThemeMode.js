import React from "react";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeModeContext } from "./MyComponents/MuiThemeProvider";

function ButtonThemeMode() {
  const context = React.useContext(ThemeModeContext);

  return (
    <IconButton
      onClick={context.toggleThemeMode}
      aria-label="toggle dark mode"
      variant="navigation"
    >
      {context.themeMode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}

export default ButtonThemeMode;
