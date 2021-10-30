import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import breakpoints from "./breakpoints.js";
import palette from "./palette.js";
import shape from "./shape.js";
import components from "./components.js";
import applyDependentThemePart from "./themeDependentPart.js";

function createMuiTheme(mode) {
  const themeObjectBase = { breakpoints, components, palette: palette(mode), shape };
  let themeObject = createTheme(themeObjectBase);
  themeObject = responsiveFontSizes(themeObject);
  themeObject = applyDependentThemePart(themeObject);
  return themeObject;
}

export default createMuiTheme;
