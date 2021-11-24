import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PointIllustration from "./PointIllustration";

export default function Section(props) {
  const { content } = props;

  const array_articles = content.components[0].componentBlocks;
  const list_articles = array_articles.map((article) => {
    return (
      <PointIllustration
        key={article.id}
        title={article.title}
        description={article.description}
        illustration={article.illustration.gatsbyImageData}
        alt={article.illustration.alt}
      />
    );
  });

  return (
    <Stack component="section" spacing={6}>
      <Typography variant="h2" children={content.title} textAlign="center" />
      <Stack sx={sx_articles}>{list_articles}</Stack>
    </Stack>
  );
}

const sx_articles = {
  flexDirection: { xs: "column", md: "row" },
  gap: 4,
};
