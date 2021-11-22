import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "gatsby";
import { useTheme } from "@mui/material";
import { PageContext } from "./PageContextProvider";

/* LinkButton and LinkMenuItem have exactly the same purpose, but to respect Mui, 
you need to use a specific MenuItem component with Menu */
/* due to url architecture, remember to deliver a locale everytime you think about an internal link*/

export function LinkButton({ anchor, slug, onClick }) {
  const theme = useTheme();
  const context = React.useContext(PageContext);
  return (
    <Button
      component={Link}
      to={context.getPathname(context.locale, slug)}
      sx={sx_Link}
      activeStyle={{
        backgroundColor: theme.palette.action.selected,
      }}
      onClick={onClick}
      children={anchor}
      disableElevation
    />
  );
}

export function LinkMenu({ anchor, menuItems, onClick }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const list_MenuItem = menuItems.map((menuItem) => {
    return (
      <LinkMenuItem
        key={menuItem.id}
        anchor={menuItem.anchor}
        slug={menuItem.slug}
        onClick={onClick}
      />
    );
  });

  return (
    <div>
      <LinkMenuAnchor anchor={anchor} onClick={handleClick} />
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {list_MenuItem}
      </Menu>
    </div>
  );
}

//---------------------Sous composants

function LinkMenuItem({ anchor, slug, onClick }) {
  const theme = useTheme();
  const context = React.useContext(PageContext);
  return (
    <MenuItem
      component={Link}
      to={context.getPathname(context.locale, slug)}
      sx={sx_Link}
      activeStyle={{
        backgroundColor: theme.palette.action.selected,
      }}
      onClick={onClick}
      children={anchor}
    />
  );
}

function LinkMenuAnchor({ anchor, onClick }) {
  return (
    <Button sx={sx_Link} onClick={onClick} children={anchor} disableElevation />
  );
}

const sx_Link = {
  backgroundColor: "background.navBar",
  color: "text.primary",
  "&:hover": {
    backgroundColor: "action.hover",
  },
};
