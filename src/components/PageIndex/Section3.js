import React from "react";
import Stack from "@mui/material/Stack";
import PointIllustratedLink from "../PointIllustratedLink";

function Section3(props) {
  const { content } = props;
  const array_articles = Object.values(content.articles);
  const list_articles = array_articles.map((article, index) => {
    return (
      <PointIllustratedLink
        key={article.title}
        title={article.title}
        description={article.description}
        illustration={article.illustration}
        illustration_alt={article.illustration_alt}
        link={article.link}
        linkPath={article.linkPath}
        direction={index % 2 === 0 ? "row-reverse" : "row"}
      />
    );
  });
  return <Stack>{list_articles}</Stack>;
}

export default Section3;
