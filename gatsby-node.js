const path = require("path");

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
      const localePrefix = `/${locale}`;
      createPage({
        path: `${localePrefix}/${slug}`,
        component: path.resolve(`./src/templates/${slug}.js`),
        context: { locale, slug, supportedLocales },
      });
    });
  });
};

/* supportedLocales devrait être une variable globalement accessible. Je n’aime 
pas bien l’idée de la transmettre via pageContext mais cela a au moins l’avantage
de respecter le principe de l’unique source de vérité */
