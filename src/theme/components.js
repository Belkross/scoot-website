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
        variants: [
          {
            props: { variant: "navBar", },
            style: {
              backgroundColor: "background.navBar",
              color: "secondary.main",
              "&:hover": {
                backgroundColor: "action.hover",
              },
            },
          },
        ],
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
