import React from "react";
import PointIllustratedNoButton from "../PointIllustratedNoButton.js";
import Stack from "@mui/material/Stack";

function Section2(props) {
  const { content } = props;
  return (
    <Stack>
      <PointIllustratedNoButton
        title={content.title}
        description={content.description}
        illustration={content.illustration}
        alt={content.illustration_alt}
        
      />
    </Stack>
  );
}

export default Section2;
