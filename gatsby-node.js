const path = require("path");
const ORIGIN_LOCALE = "en";
const ORIGIN_SLUG = "home"; 
/* The main locale on DatoCMS is the first provided. Remember you can only copy content
from the main locale.
The ORIGIN_LOCALE is the locale that will be replaced by an empty string in the url.
It can be considered as the default locale of the website */

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const query = await graphql(`
    {
      allDatoCmsSite {
        nodes {
          locale
        }
      }
      allDatoCmsPagesScootin(filter: { locale: { eq: "fr" } }) {
        nodes {
          slug
        }
      }
    }
  `);
  const supportedLocales = query.data.allDatoCmsSite.nodes.map((node) => {
    return node.locale;
  });
  const slugs = query.data.allDatoCmsPagesScootin.nodes.map((node) => {
    return node.slug;
  });

  supportedLocales.forEach((locale) => {
    slugs.forEach((slug) => {
      const localePrefix = locale === ORIGIN_LOCALE ? "" : `/${locale}`;
      const pathSlug = slug === ORIGIN_SLUG ? "" : slug;
      createPage({
        path: `${localePrefix}/${pathSlug}`,
        component: path.resolve(`./src/templates/${slug}.js`),
        context: {
          locale,
          slug,
          supportedLocales,
          ORIGIN_LOCALE,
          ORIGIN_SLUG,
        },
      });
    });
  });
};
