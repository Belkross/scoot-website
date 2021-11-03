import React from "react";
import { Helmet } from "react-helmet";

function HtmlAttributesAndHead(props) {
  const { content } = props;
  return (
    <Helmet
      htmlAttributes={{
        lang: "fr",
      }}
    >
      <title>{content.title}</title>
      <meta charset={content.charset} />
      <meta name="description" content={content.description} />
    </Helmet>
  );
}

export default HtmlAttributesAndHead;
