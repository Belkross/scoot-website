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
        primary: "#495567",
      },
      background: {
        paper: "#939caa",
      },
    };
  } else {
    return {
      mode: "light",
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
        primary: "#495567",
      },
      background: {
        paper: "#f2f5f9",
      },
    };
  }
}

export default palette;
