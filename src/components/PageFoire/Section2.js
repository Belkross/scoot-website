import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MyAccordion from "../MyAccordion";

function Section2(props) {
  const { content } = props;
  const array_articles1 = Object.values(props.content.sectionA.articles);
  const array_articles2 = Object.values(props.content.sectionB.articles);
  const list_articles1 = createAccordionList(array_articles1);
  const list_articles2 = createAccordionList(array_articles2);

  return (
    <Stack component="section" sx={sx_container}>
      <Faq title={content.sectionB.h3} list_articles={list_articles2} />
      <Faq title={content.sectionA.h3} list_articles={list_articles1} />
    </Stack>
  );
}

function Faq({ title, list_articles }) {
  return (
    <Stack component="section" spacing={4} sx={sx_stackQuestions} mb={4}>
      <Typography variant="h3" children={title} />
      <Stack spacing={1}>{list_articles}</Stack>
    </Stack>
  );
}

export default Section2;

const sx_container = {
  alignItems: "center",
  mb: 12,
};

const sx_stackQuestions = {
  flexDirection: { xs: "column", md: "row" },
  justifyContent: { xs: "flex-start", md: "space-between" },
  alignItems: "center",
  gap: 3,
};

function createAccordionList(array_articles) {
  const list = array_articles.map((article) => {
    return (
      <MyAccordion
        key={article.title}
        title={article.title}
        details={article.description}
      />
    );
  });
  return list;
}
