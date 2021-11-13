import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { LangueContext } from "./LangueProvider";

function ButtonLangue() {
  const context = useContext(LangueContext)
  return (
    <IconButton
      onClick={context.toggleLangue}
      aria-label="change language"
      variant="navigation"
    >
      <Typography children={context.langue} />
    </IconButton>
  );
}

export default ButtonLangue;
