const components = {
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
  MuiTypography: {
    defaultProps: {
      // use default body2 because body1’s styles overrides everything
      variant: "body2",
    },
  },
};

export default components;
