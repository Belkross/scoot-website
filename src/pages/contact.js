import React from "react";
import Layout from "../components/Layout/Layout";
import PageHeader from "../components/PageHeader";
import Section1 from "../components/PageContact/Section1.js";
import Section2 from "../components/PageContact/Section2.js";
import Container from "@mui/material/Container";
import { graphql } from "gatsby";

const PageContact = ({ data }) => {
  const { page_contact: content } = data.contentYaml;
  return (
    <Layout>
      <PageHeader content={content.header_page} />
      <Container>
        <Section1 />
        <Section2 content={content.section2} />
      </Container>
    </Layout>
  );
};

export default PageContact;
export const query = graphql`
  query page_contact {
    contentYaml {
      page_contact {
        section2 {
          description
          illustration_alt
          title
          illustration {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        header_page {
          title
          illustration_alt
          illustration {
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
        }
      }
    }
  }
`;
