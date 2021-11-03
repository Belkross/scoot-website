import { createTheme } from "@mui/material/styles";

function addComponents(theme) {
  return createTheme(theme, {
    components: {
      MuiIconButton: {
        variants: [
          {
            props: { variant: "navigation" },
            style: {
              border: "1px solid",
              borderRadius: "15px",
            },
          },
        ],
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: theme.palette.background.navBar,
          },
        },
      },
      MuiButton: {
        defaultProps: {
          variant: "contained",
          color: "secondary",
        },
        styleOverrides: {
          root: {
            padding: "12px 20px",
          },
        },
      },
    },
  });
}

export default addComponents;
