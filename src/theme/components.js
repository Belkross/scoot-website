const components = {
  MuiButton: {
    defaultProps: {
      variant: "contained",
    },
    styleOverrides: {
      root: {
        textTransform: "none",
      },
    },
  },
  MuiTypography: {
    defaultProps: {
      // use default body2 because body1’s styles overrides everything
      variant: "body2",
    },
  },
};

export default components;
