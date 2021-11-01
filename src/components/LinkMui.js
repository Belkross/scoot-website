import React from "react";
import { Link } from "gatsby";
import { useTheme } from "@mui/material";

function LinkMui(props) {
  const theme = useTheme();
  return (
    <Link
      to={props.to}
      activeStyle={{
        backgroundColor: theme.palette.secondary.light
      }}
      style={{
        textDecoration: "none",
        fontFamily: theme.typography.button.fontFamily,
        color: theme.palette.text.primary,
        padding: "8px 8px",
        borderRadius: theme.shape.borderRadius
      }}
      children={props.children}
      onClick={props.onClick}
    />
  );
}

export default LinkMui;


