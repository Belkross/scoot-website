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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}

export default HtmlAttributesAndHead;
