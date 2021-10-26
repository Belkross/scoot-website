import React from "react";
import PointIllustrated from "../PointIllustrated";
import Box from "@mui/material/Box";

function Section1(props) {
  const array_articles = Object.values(props.content.articles);
  const list_articles = array_articles.map((article, index) => {
    return (
      <PointIllustrated
        key={article.title}
        title={article.title}
        description={article.description}
        illustration={article.illustration}
        alt={article.illustration_alt}
        button={article.button}
        direction={index % 2 === 0 ? "row-reverse" : "row"}
      />
    );
  });
  return (
    <Box component="section" mb={{ xs: 12, md: 20 }}>
      {list_articles}
    </Box>
  );
}

export default Section1;
