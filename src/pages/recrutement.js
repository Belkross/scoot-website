import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Layout from "../components/Layout/Layout";
import Part1 from "../components/PageRecrutement/Part1";
import { graphql } from "gatsby";

function PageRecrutement({ data }) {
  const { PageRecrutement: content } = data.contentYaml;
  return (
    <Layout>
      <Typography variant="h1">{content.title}</Typography>
      <Container>
        <Part1 content={content.Part1} />
      </Container>
    </Layout>
  );
}

export default PageRecrutement;
export const query = graphql`
  query PageRecrutement {
    contentYaml {
      PageRecrutement {
        Part1 {
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
        Part2 {
          title
          section1 {
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
          section2 {
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
          section3 {
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
        Part3 {
          button
          job1 {
            location
            title
          }
          job2 {
            location
            title
          }
          job3 {
            location
            title
          }
          job4 {
            location
            title
          }
          job5 {
            location
            title
          }
          job6 {
            location
            title
          }
        }
      }
    }
  }
`;
