import React from "react";
import Layout from "../components/Layout/Layout";
import Container from "@mui/material/Container";
import PageHeader from "../components/PageHeader";
import Section1 from "../components/pageFaq/Section1";
import Section2 from "../components/pageFaq/Section2";
import { graphql } from "gatsby";

function PageAbout({ data }) {
  const { page_about: content } = data.contentYaml;
  return (
    <Layout>
      <PageHeader content={content.header} />
      <Container>
        <Section1 content={content.section1} />
        <Section2 content={content.section2} />
      </Container>
    </Layout>
  );
}

export default PageAbout;
export const query = graphql`
  query page_about {
    contentYaml {
      page_about {
        header {
          title
          illustration {
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
          illustration_alt
        }
        section1 {
          article1 {
            description
            title
            illustration_alt
            illustration {
              childImageSharp {
                gatsbyImageData
              }
            }
            button
          }
          article2 {
            title
            illustration_alt
            description
            illustration {
              childImageSharp {
                gatsbyImageData
              }
            }
            button
          }
        }
        section2 {
          h2
          sectionA {
            article1 {
              description
              title
            }
            article2 {
              description
              title
            }
            article3 {
              description
              title
            }
            h3
          }
          sectionB {
            h3
            article1 {
              title
              description
            }
            article2 {
              title
              description
            }
            article3 {
              title
              description
            }
          }
        }
      }
    }
  }
`;
