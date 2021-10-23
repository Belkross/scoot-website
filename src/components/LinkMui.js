import React from "react";
import { Link } from "gatsby";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";

function LinkMui(props) {
  const theme = useTheme();
  return (
    <Box>
      <Link
        to={props.to}
        activeStyle={{
          color: theme.palette.secondary.main,
        }}
        style={{
          textDecoration: "none",
          fontFamily: theme.typography.button.fontFamily,
          color: theme.palette.text.primary,
        }}
        children={props.children}
      />
    </Box>
  );
}

export default LinkMui;
