import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Value from "./Value";

function Section2(props) {
  const { content } = props;
  const array_articles = [content.article1, content.article2, content.article3];
  const list_articles = array_articles.map((article) => {
    return (
      <Value
        key={article.title}
        title={article.title}
        description={article.description}
        illustration={article.illustration}
        alt={article.illustration_alt}
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

export default Section2;

const sx_articles = {
  flexDirection: { xs: "column", md: "row" },
  gap: 4,
};
