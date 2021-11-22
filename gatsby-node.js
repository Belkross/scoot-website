const path = require("path");
const DEFAULT_LOCALE = "en";
const ORIGIN_SLUG = "home"; 
/* I didn’t find a way to get the principale locale with graphQL layer
Dato only provide an array of locales, and the principale is supposed to 
be the first one on the array. I don’t really trust it */

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
      const localePrefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
      const pathSlug = slug === ORIGIN_SLUG ? "" : slug;
      createPage({
        path: `${localePrefix}/${pathSlug}`,
        component: path.resolve(`./src/templates/${slug}.js`),
        context: {
          locale,
          slug,
          supportedLocales,
          DEFAULT_LOCALE,
          ORIGIN_SLUG,
        },
      });
    });
  });
};

/* supportedLocales devrait être une variable globalement accessible. Je n’aime 
pas bien l’idée de la transmettre via pageContext mais cela a au moins l’avantage
de respecter le principe de l’unique source de vérité */
