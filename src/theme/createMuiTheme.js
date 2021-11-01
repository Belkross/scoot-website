import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import breakpoints from "./breakpoints.js";
import palette from "./palette.js";
import shape from "./shape.js";
import addComponents from "./components.js";
import addTypography from "./typography.js";

function createMuiTheme(mode) {
  const themeObjectBase = {
    breakpoints,
    palette: palette(mode),
    shape,
  };

  let theme = createTheme(themeObjectBase);
  theme = addComponents(theme);
  theme = addTypography(theme);
  theme = responsiveFontSizes(theme);
  return theme;
}

export default createMuiTheme;
