import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import content from "../../content/PageIndex.yaml";

function Introduction(props) {
  return (
    <Box sx={sx_container}>
      <Stack sx={sx_stack}>
        <Typography variant="h1" children={content.introduction.title} />
        <Typography children={content.introduction.description} />
        <Button variant="contained" children={content.introduction.button} />
      </Stack>
    </Box>
  );
}

export default Introduction;

const sx_container = {
  height: 650,
  backgroundColor: "red",
  backgroundImage: `url(${
    require(`/src/${content.introduction.illustration.desktop}`).default
  })`,
};

const sx_stack = {
  maxWidth: 500,
};
