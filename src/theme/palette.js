import { blueGrey, indigo, blue, orange } from "@mui/material/colors";

const lightTextPrimary = blueGrey[900];
const darkTextPrimary = "rgba(255, 255, 255, .85)";

export default function palette(mode) {
  if (mode === "light") {
    return {
      mode: "light",
      primary: {
        main: "#939caa",
        light: "#e5ecf4",
        dark: "#495567",
        contrastText: "#495567",
      },
      secondary: {
        main: orange[300],
      },
      text: {
        primary: lightTextPrimary,
        opposite: darkTextPrimary,
      },
      background: {
        /* default:, */
        paper: indigo[50],
        navBar: blue[100],
        footerUp: "#495567",
        footerDown: "#333A44",
      },
      action: {
        /* active: "rgba(125, 125, 185, 0.95)", */
        hover: "rgba(125, 125, 125, 0.25)",
        selected: "rgba(125,125, 205, 0.35)",
      },
    };
  } else {
    return {
      mode: "dark",
      primary: {
        main: "#939caa",
        light: "#e5ecf4",
        dark: "#495567",
      },
      secondary: {
        main: orange[800],
        /* light: "#fff4df", */
      },
      text: {
        primary: darkTextPrimary,
        opposite: lightTextPrimary,
      },
      background: {
        default: blueGrey[900],
        paper: blueGrey[800],
        navBar: blueGrey[800],
        footerUp: blueGrey[800],
        footerDown: blueGrey[700],
      },
      action: {
        hover: "rgba(255, 255, 255, 0.25)",
      },
    };
  }
}
/* 
les icônes ne peuvent pas changer de couleur en fonction du theme mode. 
Il est donc conseillé de choisir une teinte intermédiaire

certaines couleurs comme le jaune n’ont qu’une seule couleur de contraste pour
leur police. Les utiliser amène de la complexité sur la propriété color des composants.
*/
