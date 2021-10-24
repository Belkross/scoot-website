import React from "react";
import Stack from "@mui/material/Stack";
import Job from "./Job";

function Section3(props) {
  const { content } = props;
  const array_articles = [];
  for (let key in content) {
    array_articles.push(content[key]);
  }
  const list_articles = array_articles.map((article) => {
    return (
      <Job
        title={article.title}
        location={article.location}
        button={article.button}
      />
    );
  });

  return (
    <Stack component="section" spacing={2} mb={12}>
      {list_articles}
    </Stack>
  );
}

export default Section3;
