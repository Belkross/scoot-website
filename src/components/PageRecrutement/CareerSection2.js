import React from "react";
import Stack from "@mui/material/Stack";
import PointInternalLinkJob from "./PointInternalLinkJob";
import Typography from "@mui/material/Typography";

export default function Section(props) {
  const { content } = props;
  const array_articles = content.components[0].componentBlocks;
  const list_articles = array_articles.map((article) => {
    return (
      <PointInternalLinkJob
        key={article.id}
        title={article.title}
        description={article.description}
        anchor={article.anchor}
        slug={article.slug}
      />
    );
  });

  return (
    <Stack component="section" sx={sx_container}>
      <Typography variant="h2" mb={4}>{content.title}</Typography>
      {list_articles}
    </Stack>
  );
}

const sx_container = {
  mb: 12,
  gap: 2,
  alignItems: "center",
};
