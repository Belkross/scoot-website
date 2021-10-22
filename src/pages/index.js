import React from "react";
import Layout from "../components/Layout/Layout";
import Introduction from "../components/PageIndex/Introduction";
import Part1 from "../components/PageIndex/Part1";
import content from "../content/PageIndex.yaml";
import Container from "@mui/material/Container";

const PageIndex = () => {
  return (
    <Layout>
      <Introduction content={content.introduction} />
      <Container>
        <Part1 content={content.part1} />
      </Container>
    </Layout>
  );
};

export default PageIndex;
