import React from "react";
import Stack from "@mui/material/Stack";
import PointIllustrated from "../PointIllustrated";

function Section3(props) {
  const { content } = props;
  const array_articles = Object.values(content.articles);
  const list_articles = array_articles.map((article, index) => {
    return (
      <PointIllustrated
        key={article.title}
        title={article.title}
        illustration={article.illustration}
        alt={article.illustration_alt}
        button={content.button}
        description={article.description}
        direction={index % 2 === 0 ? "row-reverse" : "row"}
      />
    );
  });
  return <Stack>{list_articles}</Stack>;
}

export default Section3;
