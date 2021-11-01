import { createTheme } from "@mui/material/styles";

function addComponents(theme) {
  return createTheme(theme, {
    components: {
      MuiToolbar: {
        styleOverrides: {
          root: {
            height: "100%",
            backgroundColor: theme.palette.primary.main,
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
            padding: "16px 28px",
            
          },
        },
      },
    },
  });
}

export default addComponents;
