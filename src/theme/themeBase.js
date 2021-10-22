import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import breakpoints from "./breakpoints.js";
import palette from "./palette.js";
import shape from "./shape.js";
import components from "./components.js";

function createThemeObject() {
  return { breakpoints, components, palette, shape };
}

let themeBase = createTheme(createThemeObject());
themeBase = responsiveFontSizes(themeBase)

export default themeBase;
