import React from "react";
import IconButton from "@mui/material/IconButton";
import { navigate } from "gatsby";

function IconButtonLink({ name, website, icon, color }) {
  return (
    <IconButton
      onClick={(event) => navigate(website)}
      aria-label={`lien vers la page ${name}`}
      color={color}
    >
      {icon}
    </IconButton>
  );
}

export default IconButtonLink;
