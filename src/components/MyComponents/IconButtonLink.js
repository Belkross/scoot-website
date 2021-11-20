import React from "react";
import IconButton from "@mui/material/IconButton";
import { navigate } from "gatsby";

export default function IconButtonLink({ website, icon, alt }) {
  return (
    <IconButton onClick={(event) => navigate(website)} aria-label={alt}>
      <img src={icon} alt="" style={style_icon} />
    </IconButton>
  );
}

const style_icon = {
  width: 35,
  height: 35,
};
