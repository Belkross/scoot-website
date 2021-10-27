import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

function PointIllustratedNoButton(props) {
  const { title, description, illustration, direction, alt } = props;
  const image = getImage(illustration);
  return (
    <Stack
      component="article"
      sx={sx_container}
      direction={{ xs: "column", md: direction === undefined ? "row-reverse" : direction}}
    >
      <GatsbyImage image={image} style={style_image} alt={alt} />
      <Stack sx={sx_text}>
        <Typography variant="h2" children={title} />
        <Typography children={description} />
      </Stack>
    </Stack>
  );
}

export default PointIllustratedNoButton;

const sx_container = {
  mb: 12,
  alignItems: "center",
  gap: 6,
};

const sx_text = {
  maxWidth: 550,
  alignItems: "center",
  textAlign: { xs: "center", md: "left" },
  flexShrink: 2,
  gap: 4,
};

const style_image = {
  borderRadius: "10%",
  maxHeight: "400px",
  maxWidth: "400px",
};
