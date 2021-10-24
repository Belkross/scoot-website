import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Layout from "../components/Layout/Layout";
import Section1 from "../components/PageRecrutement/Section1";
import Section2 from "../components/PageRecrutement/Section2";
import { graphql } from "gatsby";

function PageRecrutement({ data }) {
  const { PageRecrutement: content } = data.contentYaml;
  return (
    <Layout>
      <Typography variant="h1" textAlign="center" my={8}>{content.title}</Typography>
      <Container>
        <Section1 content={content.section1} />
        <Section2 content={content.section2} />
      </Container>
    </Layout>
  );
}

export default PageRecrutement;
export const query = graphql`
  query PageRecrutement {
    contentYaml {
      PageRecrutement {
        section1 {
          button
          description
          title
          illustration_alt
          illustration {
            relativePath
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        section2 {
          title
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
        title
        section3 {
          button
          article1 {
            location
            title
          }
          article2 {
            location
            title
          }
          article3 {
            location
            title
          }
          article4 {
            location
            title
          }
          article5 {
            location
            title
          }
          article6 {
            location
            title
          }
        }
      }
    }
  }
`;
