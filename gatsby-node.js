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
      const langue = `/${locale}`;
      createPage({
        path: `${langue}/${slug}`,
        component: path.resolve(`./src/templates/${slug}.js`),
        context: { locale, slug, supportedLocales },
      });
    });
  });
};
