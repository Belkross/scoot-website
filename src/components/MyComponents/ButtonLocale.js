import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { LocaleContext } from "./LocaleProvider";
import { SlugContext } from "./SlugProvider";
import { navigate } from "gatsby";

export default function ButtonLocale() {
  const context_locale = React.useContext(LocaleContext);
  const context_slug = React.useContext(SlugContext);

  const handleChange = (event, newLocale) => {
    context_locale.updateLocale(newLocale);
    navigate(`/${newLocale}/${context_slug.slug}`);
  };

  const list_ToggleButton = context_locale.supportedLocales.map((locale) => {
    return <ToggleButton key={locale} value={locale} children={locale} />;
  });

  return (
    <ToggleButtonGroup
      color="secondary"
      value={context_locale.locale}
      exclusive
      onChange={handleChange}
    >
      {list_ToggleButton}
    </ToggleButtonGroup>
  );
}

/*
The button needs an array of supported locales to scale. The truth source comes from
gatsby-node.js with a pageContext

When you pick a new locale, the component refresh the current page with the new locale.
To deliver to navigate() a proper path, it needs the new locale (not hard) and the slug (hard) of 
the current page. 


*/