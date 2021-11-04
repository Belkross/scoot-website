import { blueGrey, indigo, blue } from "@mui/material/colors";

export function palette(mode) {
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
        main: "#fcb72b",
        light: "#fff4df",
      },
      text: {
        primary: blueGrey[900],
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
        hover: "rgba(125, 125, 185, 0.2)",
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
        main: "#fcb72b",
        light: "#fff4df",
      },
      text: {
        primary: "rgba(255, 255, 255, .85)",
      },
      background: {
        default: blueGrey[900],
        paper: blueGrey[800],
        navBar: blueGrey[800],
        footerUp: blueGrey[800],
        footerDown: blueGrey[700],
      },
    };
  }
}

export default palette;
