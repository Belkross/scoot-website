import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Point from "./Point";

function Part1(props) {
  const { content } = props;
  return (
    <Box>
      <Typography
        variant="h2"
        children={content.title}
        textAlign="center"
        mb={8}
      />
      <Stack
        sx={sx_container}
        direction={{ xs: "column", md: "row" }}
        spacing={8}
      >
        <Point
          title={content.step1.title}
          description={content.step1.description}
          illustration={content.step1.illustration}
        />
        <Point
          title={content.step2.title}
          description={content.step2.description}
          illustration={content.step2.illustration}
        />
        <Point
          title={content.step3.title}
          description={content.step3.description}
          illustration={content.step3.illustration}
        />
      </Stack>
    </Box>
  );
}

export default Part1;

const sx_container = {
  mb: 12,
  textAlign: "center",
  alignItems: {xs:"center", md: "flex-start"},
};
