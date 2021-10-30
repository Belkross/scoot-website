import React from "react";
import Layout from "../components/Layout/Layout";
import Container from "@mui/material/Container";
import PageHeader from "../components/PageHeader";
import Section2 from "../components/PageRecrutement/Section2";
import Section3 from "../components/PageRecrutement/Section3";
import { graphql } from "gatsby";

function PageRecrutement({ data }) {
  const { page_recrutement: content } = data.contentYaml;
  return (
    <Layout>
      <PageHeader content={content.page_header} />
      <Container component="main">
        <Section2 content={content.section2} />
        <Section3 content={content.section3} />
      </Container>
    </Layout>
  );
}

export default PageRecrutement;
export const query = graphql`
  query PageRecrutement {
    contentYaml {
      page_recrutement {
        page_header {
          illustration_alt
          title
          illustration {
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
        }
        section2 {
          title
          articles {
            article1 {
              description
              illustration_alt
              title
              illustration {
                relativePath
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            article2 {
              description
              illustration_alt
              title
              illustration {
                relativePath
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            article3 {
              description
              illustration_alt
              title
              illustration {
                relativePath
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
        section3 {
          article1 {
            location
            title
            link
            linkPath
          }
          article2 {
            location
            title
            link
            linkPath
          }
          article3 {
            location
            title
            link
            linkPath
          }
          article4 {
            location
            title
            link
            linkPath
          }
          article5 {
            location
            title
            link
            linkPath
          }
          article6 {
            location
            title
            link
            linkPath
          }
        }
      }
    }
  }
`;
