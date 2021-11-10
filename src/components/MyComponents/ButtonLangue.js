import React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

function ButtonLangue({ onClick, currentLangue }) {
  return (
    <IconButton
      onClick={onClick}
      aria-label="change language"
      variant="navigation"
    >
      <Typography children={currentLangue === "fr" ? "Fra" : "Eng"} />
    </IconButton>
  );
}

export default ButtonLangue;
