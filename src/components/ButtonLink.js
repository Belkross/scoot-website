import React from "react";
import Button from "@mui/material/Button";
import { navigate } from "gatsby";

function ButtonLink({ children, linkPath }) {
  const handleClick = (event) => {
    navigate(linkPath);
  };

  return <Button onClick={handleClick}>{children}</Button>;
}

export default ButtonLink;
