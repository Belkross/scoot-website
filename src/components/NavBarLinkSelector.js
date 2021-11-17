import React from "react";
import { LinkButton, LinkMenu } from "./MyComponents/GatsbyLinks";

export default function LinkNavBar({
  anchor,
  slug,
  linkType,
  menuItems,
  onClick,
}) {
  const component = linkType === "menu_link" ? "menu_link" : "internal_link";

  if (component === "internal_link") {
    return <LinkButton anchor={anchor} slug={slug} onClick={onClick} />;
  } else {
    return <LinkMenu anchor={anchor} menuItems={menuItems} onClick={onClick} />;
  }
}
