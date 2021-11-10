import React from "react";
import Menu from "@mui/material/Menu";
import { LinkMenuItem, LinkMenuAnchor } from "../MyComponents/GatsbyLinks";

function MenuLinks({ name, menuItems }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const list_MenuItem = menuItems.map((link) => {
    return <LinkMenuItem key={link.id} name={link.name} path={link.path} />;
  });
  return (
    <div>
      <LinkMenuAnchor name={name} onClick={handleClick} />
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {list_MenuItem}
      </Menu>
    </div>
  );
}

export default MenuLinks;
