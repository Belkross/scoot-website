import React from "react";
import Stack from "@mui/material/Stack";
import Point from "./Part2Point";

function Part2(props) {
  const { content } = props;
  return (
    <Stack>
      <Point
        title={content.section1.title}
        description={content.section1.description}
        illustration={content.section1.illustration}
        button={content.button}
        direction="row"
      />
      <Point
        title={content.section2.title}
        description={content.section2.description}
        illustration={content.section2.illustration}
        button={content.button}
        direction="row-reverse"
      />
      <Point
        title={content.section3.title}
        description={content.section3.description}
        illustration={content.section3.illustration}
        button={content.button}
        direction="row"
      />
    </Stack>
  );
}

export default Part2;
