import { blueGrey } from "@mui/material/colors";

export function palette(mode) {
  if (mode === "dark") {
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
        primary: "#fff",
      },
      background: {
        paper: blueGrey[800],
      },
    };
  } else {
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
        primary: "#495567",
      },
      background: {
        paper: blueGrey[100],
        navBar: blueGrey[300],
      },
    };
  }
}

export default palette;
