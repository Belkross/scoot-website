import React from "react";
import PointIllustrated from "../PointIllustrated";
import Box from "@mui/material/Box";

function Section1(props) {
  const { content } = props;
  return (
    <Box component="section" mb={{ xs: 12, md: 20 }}>
      <PointIllustrated
        title={content.article1.title}
        description={content.article1.description}
        illustration={content.article1.illustration}
        alt={content.article1.illustration_alt}
        button={content.article1.button}
        direction="row-reverse"
      />
      <PointIllustrated
        title={content.article2.title}
        description={content.article2.description}
        illustration={content.article2.illustration}
        alt={content.article2.illustration_alt}
        button={content.article2.button}
        direction="row"
      />
    </Box>
  );
}

export default Section1;

