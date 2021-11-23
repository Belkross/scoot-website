import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import { PageContext } from "../MyComponents/PageContextProvider";
const CHARSET = "utf-8";

export default function HtmlAttributesAndHead() {
  const data = useStaticQuery(query);
  const context = React.useContext(PageContext);
  
  const array_favicon = data.datoCmsFaviconMetaTags.tags.filter(
    (element) => element.tagName === "link"
  );
  const list_favicon = array_favicon.map((markup) => {
    const { rel, sizes, href, type } = markup.attributes;
    return <link key={sizes} rel={rel} sizes={sizes} href={href} type={type} />;
  });

  return (
    <Helmet
      htmlAttributes={{
        lang: context.locale,
      }}
    >
      {/* <title>{siteMetadata.title}</title> */}
      <meta charset={CHARSET} />
      {list_favicon}
      {/* <meta name="description" content={siteMetadata.description} /> */}
    </Helmet>
  );
}

const query = graphql`
  query component_HtmlAttributesAndHead {
    datoCmsFaviconMetaTags {
      tags
    }
  }
`;

/* 
I also can to modify the <head/> from .html but not dynamically. That’s why I 
use react-helmet
*/
