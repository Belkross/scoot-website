import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PointIllustratedSvg from "../PointIllustratedSvg";

function Section2(props) {
  const { content } = props;
  const array_articles = Object.values(content.articles);
  const list_articles = array_articles.map((article) => {
    return (
      <PointIllustratedSvg
        key={article.title}
        title={article.title}
        description={article.description}
        illustration={article.illustration}
        illustration_alt={article.illustration_alt}
      />
    );
  });

  return (
    <Box component="section" sx={sx_container}>
      <Typography
        variant="h2"
        children={content.title}
        textAlign="center"
        mb={8}
      />
      <Stack sx={sx_points}>{list_articles}</Stack>
    </Box>
  );
}

export default Section2;

const sx_container = {
  mb: 12,
};

const sx_points = {
  textAlign: "center",
  alignItems: { xs: "center", md: "flex-start" },
  flexDirection: { xs: "column", md: "row" },
  gap: 6,
};
