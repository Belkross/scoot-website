import { createTheme } from "@mui/material/styles";
import breakpoints from "./breakpoints.js";
import palette from "./palette.js";
import shape from "./shape.js";
import components from "./components.js";

function createThemeObject() {
  return { breakpoints, components, palette, shape };
}

const themeBase = createTheme(createThemeObject());

export default themeBase;
