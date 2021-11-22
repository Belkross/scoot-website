import React from "react";
import Layout from "../components/Layout/Layout";

function PageHome({ data, pageContext }) {
  return (
    <Layout pageContext={pageContext}>
      <h1>PageHome</h1>
    </Layout>
  );
}
export default PageHome;

/* import { graphql } from "gatsby"; */
/* export const query = graphql`
  query TemplateHome ($locale: String!){
    allDatoCmsSite(filter: { locale: { eq: $locale } }) {
      nodes {
        locale
        bonjour: $locale
      }
    }
  }
`;
 */
