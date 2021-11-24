import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PointIllustrationSvg from "./PointIllustrationSvg";

export default function Section(props) {
  const array_articles = props.content.components[0].componentBlocks;
  const list_articles = array_articles.map((article) => {
    return (
      <PointIllustrationSvg
        key={article.id}
        title={article.title}
        description={article.description}
        illustration={article.illustration.url}
        illustration_alt={article.illustration.alt}
      />
    );
  });

  return (
    <Box component="section" sx={sx_container}>
      <Typography
        variant="h2"
        children={props.content.title}
        textAlign="center"
        mb={8}
      />
      <Stack sx={sx_points}>{list_articles}</Stack>
    </Box>
  );
}

const sx_container = {
  mb: 12,
};

const sx_points = {
  textAlign: "center",
  alignItems: { xs: "center", md: "flex-start" },
  flexDirection: { xs: "column", md: "row" },
  gap: 6,
};
