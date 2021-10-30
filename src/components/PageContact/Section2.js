import React from "react";
import PointIllustrated from "../PointIllustrated.js";
import Stack from "@mui/material/Stack";

function Section2(props) {
  const { content } = props;
  return (
    <Stack>
      <PointIllustrated
        title={content.title}
        description={content.description}
        illustration={content.illustration}
        illustration_alt={content.illustration_alt}
      />
    </Stack>
  );
}

export default Section2;
