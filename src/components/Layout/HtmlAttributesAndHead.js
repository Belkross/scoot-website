import React from "react";
import { Helmet } from "react-helmet";

function HtmlAttributesAndHead(props) {
  return (
    <Helmet
      htmlAttributes={{
        lang: "fr",
      }}
    >
      <title>Maker</title>
      <meta name="description" content={props.content.description} />
    </Helmet>
  );
}

export default HtmlAttributesAndHead;
