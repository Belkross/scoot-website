import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import { PageContext } from "../MyComponents/PageContextProvider";
const CHARSET = "utf-8";

export default function HtmlAttributesAndHead() {
  const data = useStaticQuery(query);
  const context = React.useContext(PageContext);

  //favicon
  const array_favicon = data.datoCmsFaviconMetaTags.tags.filter(
    (element) => element.tagName === "link"
  );
  const list_favicon = array_favicon.map((markup) => {
    const { rel, sizes, href, type } = markup.attributes;
    return <link key={sizes} rel={rel} sizes={sizes} href={href} type={type} />;
  });

  const pageSeo = data.allDatoCmsPagesScootin.nodes.find(
    (node) => node.locale === context.locale && node.slug === context.slug
  ).seoData;
  const globalSeo = data.allDatoCmsSite.nodes.find(
    (node) => node.locale === context.locale
  ).globalSeo;

  const title = getTitle(pageSeo, globalSeo);
  const description = getDescription(pageSeo, globalSeo);

  return (
    <Helmet
      htmlAttributes={{
        lang: context.locale,
      }}
    >
      <title>{title}</title>
      <meta charset={CHARSET} />
      {list_favicon}
      <meta name="description" content={description} />
    </Helmet>
  );
}

function getTitle(pageSeo, globalSeo) {
  const titleSuffix = globalSeo.titleSuffix;
  let title = globalSeo.fallbackSeo.title;
  if (pageSeo !== null) {
    const keys = Object.keys(pageSeo);
    const titleKeyExist = keys.find((key) => key === "title");
    const titleValueExist = pageSeo.title === null ? false : true;
    if (titleKeyExist && titleValueExist) {
      title = pageSeo.title;
    }
  }
  return title + titleSuffix;
}

function getDescription(pageSeo, globalSeo) {
  let description = globalSeo.fallbackSeo.description;
  if (pageSeo !== null) {
    const keys = Object.keys(pageSeo);
    const descriptionKeyExist = keys.find((key) => key === "description");
    const descriptionValueExist = pageSeo.description === null ? false : true;
    if (descriptionKeyExist && descriptionValueExist) {
      description = pageSeo.description;
    }
  }
  return description;
}

const query = graphql`
  query component_HtmlAttributesAndHead {
    datoCmsFaviconMetaTags {
      tags
    }
    allDatoCmsPagesScootin {
      nodes {
        seoData {
          title
          description
        }
        locale
        slug
      }
    }
    allDatoCmsSite {
      nodes {
        globalSeo {
          fallbackSeo {
            title
            description
          }
          titleSuffix
        }
        locale
      }
    }
  }
`;

/* 
I also can to modify the <head/> from .html but not dynamically. That’s why I 
use react-helmet
*/
