import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MyAccordion from "../MyAccordion";

function Section2(props) {
  const { content } = props;
  const array_articles1 = [];
  const array_articles2 = [];
  for (let key in content.sectionA) {
    if (key !== "h3") {
      array_articles1.push(content.sectionA[key]);
    }
  }
  for (let key in content.sectionB) {
    if (key !== "h3") {
      array_articles2.push(content.sectionB[key]);
    }
  }
  const list_articles1 = array_articles1.map((article) => {
    return (
      <MyAccordion
        key={article.title}
        summary={article.title}
        details={article.description}
      />
    );
  });
  const list_articles2 = array_articles2.map((article) => {
    return (
      <MyAccordion
        key={article.title}
        summary={article.title}
        details={article.description}
      />
    );
  });

  return (
    <Stack component="section" sx={sx_container}>
      <Typography variant="h2" children={content.h2} mb={6} />
      <Stack spacing={4} sx={sx_stackQuestions} mb={6}>
        <Typography variant="h3" children={content.sectionA.h3} />
        <Stack spacing={1}>{list_articles1}</Stack>
      </Stack>
      <Stack spacing={4} sx={sx_stackQuestions}>
        <Typography variant="h3" children={content.sectionB.h3} />
        <Stack spacing={1}>{list_articles2}</Stack>
      </Stack>
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
  gap: 3
};
