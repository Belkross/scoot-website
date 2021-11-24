import React from "react";
import Stack from "@mui/material/Stack";
import PointIllustrationLinkInt from "./PointIllustrationLinkInt";

export default function Section(props) {
  const array_articles = props.content.components[0].componentBlocks;
  const list_articles = array_articles.map((article, index) => {
    return (
      <PointIllustrationLinkInt
        key={article.id}
        title={article.title}
        description={article.description}
        illustration={article.illustration.gatsbyImageData}
        illustration_alt={article.illustration.alt}
        anchor={article.anchor}
        slug={article.slug}
        direction={index % 2 === 0 ? "row-reverse" : "row"}
      />
    );
  });

  return <Stack>{list_articles}</Stack>;
}
