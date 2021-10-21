import themeBase from "./themeBase.js";
const titleFont = "Space Mono, monospace";
const mainFont = "Lexend Deca, sans-serif"
const theme = themeBase

theme.typography.h1 = {
  fontFamily: titleFont,
  fontSize: 56,
  lineHeight: 56,
  fontWeight: 700,
  color: theme.palette.text.primary,
/*   [theme.breakpoints.up("md")]: {
    fontSize: 48,
    lineHeight: "56px",
  }, */
};

theme.typography.h2 = {
  fontFamily: titleFont,
  fontSize: 48,
  lineHeight: 48,
  fontWeight: 700,
  color: theme.palette.text.primary,
};

theme.typography.h3 = {
  fontFamily: titleFont,
  fontSize: 40,
  lineHeight: 40,
  fontWeight: 700,
  color: theme.palette.text.primary,
};

theme.typography.h4 = {
  fontFamily: titleFont,
  fontSize: 24,
  lineHeight: 24,
  fontWeight: 700,
  color: theme.palette.text.primary,
};

theme.typography.body2 = {
  fontFamily: mainFont,
  fontSize: 15,
  lineHeight: "25px",
  fontWeight: 500,
  color: theme.palette.text.primary,
};

export default theme;
