import { createTheme } from "@mui/material/styles";
const titleFont = "Space Mono, monospace";
const mainFont = "Lexend Deca, sans-serif";

function addTypography(theme) {
  return createTheme(theme, {
    typography: {
      h1: {
        fontFamily: titleFont,
        fontSize: 56,
        lineHeight: 1,
        fontWeight: 700,
        letterSpacing: -2.5,
      },
      h2: {
        fontFamily: titleFont,
        fontSize: 48,
        lineHeight: 1,
        fontWeight: 700,
        letterSpacing: -2.14,
      },
      h3: {
        fontFamily: titleFont,
        fontSize: 40,
        lineHeight: 1,
        fontWeight: 700,
        letterSpacing: -1.79,
      },
      h4: {
        fontFamily: titleFont,
        fontSize: 24,
        lineHeight: 1,
        fontWeight: 700,
        letterSpacing: -1.07,
      },
      body1: {
        fontFamily: mainFont,
        fontSize: 15,
        lineHeight: 1.4,
        fontWeight: 500,
        letterSpacing: 0,
      },
      button: {
        fontFamily: mainFont,
        fontSize: 15,
        lineHeight: 1.4,
        fontWeight: 500,
        letterSpacing: 0,
        textTransform: "none",
        color: "#fff", //pour une raison inconnue cette ligne ne fonctionne pas
      },
    },
  });
}

export default addTypography;

/* 
  by default all fonts take color: palette.text.primary
*/
