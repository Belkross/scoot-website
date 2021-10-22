import themeBase from "./themeBase.js";
const titleFont = "Space Mono, monospace";
const mainFont = "Lexend Deca, sans-serif";
const theme = themeBase;

theme.typography.h1 = {
  fontFamily: titleFont,
  fontSize: 56,
  lineHeight: "56px",
  fontWeight: 700,
  letterSpacing: -2.5,
  color: theme.palette.text.primary,
  [theme.breakpoints.down("sm")]: {
    fontSize: 44,
    lineHeight: "44px",
  },
};

theme.typography.h2 = {
  fontFamily: titleFont,
  fontSize: 48,
  lineHeight: "48px",
  fontWeight: 700,
  letterSpacing: -2.14,
  color: theme.palette.text.primary,
};

theme.typography.h3 = {
  fontFamily: titleFont,
  fontSize: 40,
  lineHeight: "40px",
  fontWeight: 700,
  letterSpacing: -1.79,
  color: theme.palette.text.primary,
};

theme.typography.h4 = {
  fontFamily: titleFont,
  fontSize: 24,
  lineHeight: "24px",
  fontWeight: 700,
  letterSpacing: -1.07,
  color: theme.palette.text.primary,
};

theme.typography.body2 = {
  fontFamily: mainFont,
  fontSize: 15,
  lineHeight: "25px",
  fontWeight: 500,
  letterSpacing: 0,
  color: theme.palette.text.primary,
};

theme.typography.button = {
  fontFamily: mainFont,
  fontWeight: 700,
  textTransform: "none",
};
export default theme;
