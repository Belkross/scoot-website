import React from "react";
import Button from "@mui/material/Button";
import { navigate } from "gatsby";

function ButtonLink({ children, linkPath, sx }) {
  const handleClick = (event) => {
    navigate(linkPath);
  };

  return <Button onClick={handleClick} sx={sx}>{children}</Button>;
}

export default ButtonLink;
