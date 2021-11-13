import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { LangueContext, SUPPORTED_LANGUES } from "./LangueProvider";

export default function ButtonLangue() {
  const context = React.useContext(LangueContext);

  const handleChange = (event, newLangue) => {
    context.toggleLangue(newLangue);
  };

  const list_ToggleButton = SUPPORTED_LANGUES.map((langue) => {
    return <ToggleButton key={langue} value={langue} children={langue} />;
  });
  return (
    <ToggleButtonGroup
      color="secondary"
      value={context.langue}
      exclusive
      onChange={handleChange}
    >
      {list_ToggleButton}
    </ToggleButtonGroup>
  );
}
