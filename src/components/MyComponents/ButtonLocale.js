import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { PageContext } from "./PageContextProvider";
import { navigate } from "gatsby";

export default function ButtonLocale() {
  const context = React.useContext(PageContext);
  const { slug: currentSlug, supportedLocales, getPathname } = context;

  const handleChange = (event, newLocale) => {
    if (newLocale) navigate(getPathname(newLocale, currentSlug));
    //if you click on the same Button, newLocale = null
  };

  const list_ToggleButton = supportedLocales.map((locale) => {
    return (
      <ToggleButton
        key={locale}
        value={locale}
        children={locale}
        sx={sx_ToggleButton}
      />
    );
  });

  return (
    <ToggleButtonGroup
      color="secondary"
      value={context.locale}
      exclusive
      onChange={handleChange}
    >
      {list_ToggleButton}
    </ToggleButtonGroup>
  );
}

const sx_ToggleButton = {
  width: 45,
};
/*
The button needs an array of supported locales to scale. The single truth source comes from
gatsby-node.js with a pageContext
*/
