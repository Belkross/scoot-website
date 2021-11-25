import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Section(props) {
  const content = props.content.components[0].componentBlocks[0];

  return (
    <Box component="section" sx={sx_container}>
      <GatsbyImage
        image={content.illustration.gatsbyImageData}
        alt={content.illustration.alt}
        style={style_image}
      />
      <Stack sx={sx_text} component="article">
        <Typography variant="h1" children={props.content.title} color="secondary.main" />
        <Typography children={content.description} color="common.white" />
      </Stack>
    </Box>
  );
}

const sx_container = {
  mb: 12,
  display: "grid",
  height: 650,
};

const style_image = {
  display: "grid",
  gridArea: "1/1",
};

const sx_text = {
  maxWidth: 600,
  position: "relative",
  gridArea: "1/1",
  justifyContent: "center",
  alignItems: "center",
  textAlign: { xs: "center", sm: "left" },
  mr: "auto",
  ml: { xs: "auto", md: "15%" },
  px: 3,
  gap: 3,
};
