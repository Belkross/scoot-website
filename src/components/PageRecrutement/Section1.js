import React from "react";
import PointIllustrated from "../PointIllustrated";
import Box from "@mui/material/Box";

function Section1(props) {
  const { content } = props;
  return (
    <Box component="article" mb={{ xs: 12, md: 20 }}>
      <PointIllustrated
        title={content.title}
        description={content.description}
        illustration={content.illustration}
        alt={content.illustration_alt}
        button={content.button}
        direction="row"
      />
    </Box>
  );
}

export default Section1;
