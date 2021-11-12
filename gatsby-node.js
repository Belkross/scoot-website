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
  const locales = query.data.allDatoCmsSite.nodes.map((element) => {
    return element.locale;
  });
  const pages = query.data.allDatoCmsPagesScootin.nodes.map((element) => {
    return element.slug;
  });
  
  locales.forEach((locale) => {
    pages.forEach((page) => {
      const prefix = `/${locale}`;
      createPage({
        path: `${prefix}/${page}`,
        component: path.resolve(`./src/templates/${page}.js`),
        context: { locale },
      });
    });
  });
};
