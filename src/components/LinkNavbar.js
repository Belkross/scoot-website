import React from "react";
import { LinkButton } from "./MyComponents/GatsbyLinks";
import MenuLinks from "./Layout/MenuLinks";

function LinkNavBar({ name, path, linkType, menuItems, onClick }) {
  const component = linkType === "link_menu" ? "link_menu" : "link_normal"; //not secure
  if (component === "link_normal") {
    return <LinkButton name={name} path={path} onClick={onClick} />;
  } else {
    return <MenuLinks name={name} menuItems={menuItems} />;
  }
}

export default LinkNavBar;

/* le contrôleButton type et de la forme des entrées n’est pas optimal */
