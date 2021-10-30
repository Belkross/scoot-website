import React from "react";
import { Helmet } from "react-helmet";

function HtmlAttributesAndHead() {
  return (
    <Helmet
      htmlAttributes={{
        lang: "fr",
      }}
    >
      <title>Maker</title>
    </Helmet>
  );
}

export default HtmlAttributesAndHead;
