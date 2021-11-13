import React from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "gatsby";
import { useTheme } from "@mui/material";

export function LinkButton({ name, path, onClick }) {
  const theme = useTheme();
  return (
    <Button
      component={Link}
      to={path}
      sx={sx_Link}
      disableElevation
      activeStyle={{
        backgroundColor: theme.palette.action.selected,
      }}
      onClick={onClick}
      children={name}
    />
  );
}

export function LinkMenuAnchor({ name, onClick }) {
  return (
    <Button sx={sx_Link} onClick={onClick} children={name} disableElevation />
  );
}

export function LinkMenuItem({ name, path, onClick }) {
  const theme = useTheme();
  return (
    <MenuItem
      component={Link}
      children={name}
      to={path}
      sx={sx_Link}
      activeStyle={{
        backgroundColor: theme.palette.action.selected,
      }}
      onClick={onClick}
    />
  );
}

const sx_Link = {
  backgroundColor: "background.navBar",
  color: "text.primary",
  "&:hover": {
    backgroundColor: "action.hover",
  },
};
