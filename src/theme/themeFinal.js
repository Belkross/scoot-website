import themeBase from "./themeBase.js";
const mainFont = "Roboto, sans-serif";
const theme = themeBase

theme.typography.h1 = {
  fontFamily: mainFont,
  fontSize: 32,
  lineHeight: "40px",
  fontWeight: 800,
  color: theme.palette.primary.main,
  [theme.breakpoints.up("md")]: {
    fontSize: 48,
    lineHeight: "56px",
  },
};

theme.typography.h2 = {
  fontFamily: mainFont,
  fontSize: 40,
  lineHeight: "55px",
  fontWeight: 800,
};

theme.typography.h3 = {
  fontFamily: mainFont,
  fontSize: 24,
  lineHeight: "32px",
  fontWeight: 800,
};

theme.typography.h4 = {
  fontFamily: mainFont,
  fontSize: 18,
  lineHeight: "25px",
  fontWeight: 800,
};

theme.typography.body2 = {
  fontFamily: mainFont,
  fontSize: 15,
  lineHeight: "25px",
  fontWeight: 500,
};

export default theme;
