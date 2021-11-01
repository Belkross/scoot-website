import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ButtonMainAction from "../ButtonMainAction";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function section1(props) {
  const { content } = props;
  const image = getImage(content.illustration);
  return (
    <Box component="section" sx={sx_container}>
      <GatsbyImage
        image={image}
        alt={content.illustration_alt}
        style={style_image}
      />
      <Text
        title={content.title}
        description={content.description}
        buttonText={content.button}
      />
    </Box>
  );
}

function Text({ title, description, buttonText }) {
  return (
    <Stack sx={sx_text} component="article">
      <Typography variant="h1" children={title} />
      <Typography children={description} color="primary.light" />
      <ButtonMainAction children={buttonText} />
    </Stack>
  );
}
export default section1;

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
