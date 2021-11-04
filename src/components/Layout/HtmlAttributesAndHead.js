import React from "react";
import { Helmet } from "react-helmet";

function HtmlAttributesAndHead({ siteMetadata, favicon, language }) {
  return (
    <Helmet
      htmlAttributes={{
        lang: { language },
      }}
    >
      <title>{siteMetadata.title}</title>
      <meta charset={siteMetadata.charset} />
      <link rel="icon" href={favicon} type="image/x-icon" />
      <meta name="description" content={siteMetadata.description} />
    </Helmet>
  );
}

export default HtmlAttributesAndHead;
