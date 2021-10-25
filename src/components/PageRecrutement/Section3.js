import React from "react";
import Stack from "@mui/material/Stack";
import Job from "./Job";

function Section3(props) {
  const { content } = props;
  const array_articles = Object.values(content);
  const list_articles = array_articles.map((article) => {
    return (
      <Job
        key={article.title}
        title={article.title}
        location={article.location}
        button={article.button}
      />
    );
  });

  return (
    <Stack component="section" sx={sx_container}>
      {list_articles}
    </Stack>
  );
}

export default Section3;

const sx_container = {
  mb: 12,
  gap: 2,
};
