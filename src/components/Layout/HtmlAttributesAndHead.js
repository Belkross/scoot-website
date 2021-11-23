import React from "react";
import { Helmet } from "react-helmet";
import { PageContext } from "../MyComponents/PageContextProvider";
const CHARSET = "utf-8";

export default function HtmlAttributesAndHead() {
  const context = React.useContext(PageContext);

  return (
    <Helmet
      htmlAttributes={{
        lang: context.locale,
      }}
    >
      {/* <title>{siteMetadata.title}</title> */}
      <meta charset={CHARSET} />
      {/* <link rel="icon" href={favicon} type="image/x-icon" /> */}
      {/* <meta name="description" content={siteMetadata.description} /> */}
    </Helmet>
  );
}

/* 
I also can to modify the <head/> from .html but not dynamically. That’s why I 
use react-helmet
*/
